// header.js

fetch('../components/header.html')
  .then(response => response.text())
  .then(html => {
    const headerSection = document.getElementById('headerSection')
    // const header = document.createElement('header');
    headerSection.innerHTML = html;
    // document.body.insertAfter(header, document.body.row.column);
  });
  