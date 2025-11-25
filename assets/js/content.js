const page = window.location.pathname.split("/").pop().replace(".html", "");
const contentFile = `data/page-data/${page}-content.json`;

async function loadContent() {
  try {
    const res = await fetch(contentFile);
    const data = await res.json();

    Object.keys(data).forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;

      // If element has data-type="html", insert as HTML
      if (el.dataset.type === "html") {
        el.innerHTML = data[id];
      } else if (el.tagName === "IMG") {
        el.src = data[id];
      } else {
        el.textContent = data[id];
      }
    });
  } catch (err) {
    console.error("Error loading content JSON:", err);
  }
}

loadContent();
