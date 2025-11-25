const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", async (e) => {
  e.preventDefault(); // stop normal page reload

  const data = new FormData(form);

  try {
    const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      status.textContent = "Thank you! Your message has been sent.";
      form.reset();
    } else {
      const result = await response.json();
      status.textContent = result.errors ? result.errors.map(e => e.message).join(", ") : "Oops! There was a problem.";
    }
  } catch (err) {
    status.textContent = "Oops! There was a problem sending your message.";
    console.error(err);
  }
});
