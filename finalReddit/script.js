// script.js
function redirectPage(event) {
    event.preventDefault();

    const searchTerm = document.querySelector('.round').value;

    // Replace 'target-page.html' with your actual target page
    window.location.href = 'search.html?search=' + encodeURIComponent(searchTerm);
}
