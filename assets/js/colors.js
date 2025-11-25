async function loadColors() {
  try {
    const res = await fetch('../data/colors.json');
    const colors = await res.json();

    const root = document.documentElement;

    // Set CSS variables dynamically
    Object.keys(colors).forEach(key => {
      root.style.setProperty(`--${key}`, colors[key]);
    });
  } catch (err) {
    console.error('Error loading colors:', err);
  }
}

loadColors();
