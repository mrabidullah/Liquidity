const rows = [...document.querySelectorAll("#access-log-rows tr")];
const pageSize = 5;
const pageCount = Math.ceil(rows.length / pageSize);
let currentPage = 1;

const pageStatus = document.querySelector("#page-status");
const totalCount = document.querySelector("#access-log-total");
const firstPage = document.querySelector("#first-page");
const previousPage = document.querySelector("#previous-page");
const nextPage = document.querySelector("#next-page");
const lastPage = document.querySelector("#last-page");

function renderPage() {
  const start = (currentPage - 1) * pageSize;

  rows.forEach((row, index) => {
    row.hidden = index < start || index >= start + pageSize;
  });

  pageStatus.textContent = `Page ${currentPage} of ${pageCount}`;
  totalCount.textContent = `${rows.length.toLocaleString()} total`;
  firstPage.disabled = previousPage.disabled = currentPage === 1;
  nextPage.disabled = lastPage.disabled = currentPage === pageCount;
  [firstPage, previousPage, nextPage, lastPage].forEach((button) => {
    button.classList.toggle("opacity-40", button.disabled);
  });
}

firstPage.addEventListener("click", () => {
  currentPage = 1;
  renderPage();
});

previousPage.addEventListener("click", () => {
  currentPage = Math.max(1, currentPage - 1);
  renderPage();
});

nextPage.addEventListener("click", () => {
  currentPage = Math.min(pageCount, currentPage + 1);
  renderPage();
});

lastPage.addEventListener("click", () => {
  currentPage = pageCount;
  renderPage();
});

renderPage();
