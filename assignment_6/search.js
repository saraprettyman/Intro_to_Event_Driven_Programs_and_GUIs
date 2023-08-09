document.addEventListener("DOMContentLoaded", async () => {
  const mainContent = document.getElementById("main-content");
  const searchInput = document.getElementById("search-input");
  const errorMessage = document.getElementById("error-message");
  const quoteContainer = document.getElementById("quote-container");
  const searchForm = document.getElementById("search-form");
  const pinnedQuotes = [];

  // Fetch and display a random quote on page load
  await fetchRandomQuote();

  // Attach a keyup event listener to the input field
  searchForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const author = searchInput.value.trim();
    if (!author) {
      showError("Blank text entered. Please enter an author name.");
      return;
    }

    hideError();
    mainContent.classList.remove("centered");
    quoteContainer.classList.remove("random");
    await fetchQuotesByAuthor(author);
  });

  async function fetchRandomQuote() {
    const result = await fetch(
      "https://usu-quotes-mimic.vercel.app/api/random"
    );
    const quote = await result.json();
    displayQuote(quote);
    searchInput.placeholder = quote.author;
  }

  async function fetchQuotesByAuthor(author) {
    try {
      const result = await fetch(
        `https://usu-quotes-mimic.vercel.app/api/search?query=${encodeURIComponent(
          author
        )}`
      );
      const quotes = await result.json();
      if (quotes.length === 0) {
        showError(`No quotes found for ${author}. Please try another author.`);
      } else {
        displayQuotes(quotes.results);
      }
    } catch (error) {
      showError("Error fetching quotes. Please try again.");
      quoteContainer.innerHTML = "";
    }
  }

  function displayQuote(quote) {
    quoteContainer.innerHTML = `
          <div class="randomQuote" aria-live="polite">
          <p style="text-align: center;">${quote.content}</p>
          <div style="text-align: center"><strong>- ${quote.author}</strong></div>
          </div>
           `;
  }

  function displayQuotes(quotes) {
    let quotesHTML = "";

    // Display pinned quotes
    pinnedQuotes.forEach((quote) => {
      quotesHTML += createQuoteHTML(quote, true);
    });

    quotes.forEach((quote) => {
      quotesHTML += createQuoteHTML(quote, false);
    });

    quoteContainer.innerHTML = quotesHTML;

    // Add click event listener for pin/unpin
    const quoteElements = quoteContainer.querySelectorAll(".quote");
    quoteElements.forEach((quoteElement, index) => {
      // Remove existing click event listener
      const newQuoteElement = quoteElement.cloneNode(true);
      quoteElement.parentNode.replaceChild(newQuoteElement, quoteElement);

      // Add new click event listener
      newQuoteElement.addEventListener("click", () => {
        const quote =
          index < pinnedQuotes.length
            ? pinnedQuotes[index]
            : quotes[index - pinnedQuotes.length];

        if (quoteElement.classList.contains("pinned")) {
          unpinQuote(quote);
          quotes.splice(0, 0, quote);
        } else {
          pinQuote(quote);
          const index = quotes.indexOf(quote);
          quotes.splice(index, 1);
        }
        displayQuotes(quotes);
      });
    });
  }

  function createQuoteHTML(quote, isPinned) {
    const quoteClass = isPinned ? "quote pinned" : "quote";
    return `
      <div class="${quoteClass}">
        <p>${quote.content}</p>
        <div style="text-align: right;"><strong>- ${quote.author}</strong></div>
      </div>
    `;
  }

  function pinQuote(quote) {
    if (!pinnedQuotes.includes(quote)) {
      pinnedQuotes.splice(0, 0, quote);
    }
  }

  function unpinQuote(quote) {
    const index = pinnedQuotes.indexOf(quote);
    if (index > -1) {
      pinnedQuotes.splice(index, 1);
    }
  }

  function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.remove("hidden");
  }

  function hideError() {
    errorMessage.classList.add("hidden");
  }
});
