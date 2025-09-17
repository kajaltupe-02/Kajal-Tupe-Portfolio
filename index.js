const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  form.addEventListener("submit", async function(e) {
    e.preventDefault();

    const formData = new FormData(form);
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      showMessage("✅ Thank you! Your message has been sent.", "success");
      form.reset();
    } else {
      showMessage("❌ Oops! Something went wrong. Try again.", "danger");
    }
  });

  function showMessage(msg, type) {
    status.innerHTML = `<div class="alert alert-${type} fade-message">${msg}</div>`;
    const messageBox = status.querySelector(".fade-message");
    setTimeout(() => messageBox.classList.add("show"), 10); 
    setTimeout(() => {
      messageBox.classList.remove("show"); 
      setTimeout(() => status.innerHTML = "", 500); 
    }, 4000); 
  }