document.addEventListener("DOMContentLoaded", () => {
  const basePath = document.body.dataset.basePath || ".";

  const loadTemplate = async (relativePath) => {
    const response = await fetch(`${basePath}/components/${relativePath}`);
    if (!response.ok) {
      throw new Error(`Unable to load ${relativePath}`);
    }

    return response
      .text()
      .then((html) =>
        html
          .replaceAll("{{basePath}}", basePath)
          .replaceAll("{{year}}", String(new Date().getFullYear()))
      );
  };

  Promise.all([loadTemplate("header.html"), loadTemplate("footer.html")])
    .then(([headerHtml, footerHtml]) => {
      const header = document.createElement("header");
      header.className = "site-header";
      header.innerHTML = headerHtml;
      document.body.insertBefore(header, document.body.firstChild);

      const footer = document.createElement("footer");
      footer.className = "site-footer";
      footer.innerHTML = footerHtml;
      document.body.appendChild(footer);
    })
    .catch((error) => {
      console.error("Shared layout failed to load.", error);
    });
});
