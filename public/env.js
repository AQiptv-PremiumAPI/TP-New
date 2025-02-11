fetch('/api/env')
  .then(response => response.json())
  .then(data => {
    document.body.innerHTML = document.body.innerHTML
      .replace(/\$\{user\}/g, data.user)
      .replace(/\$\{token\}/g, data.token)
      .replace(/\$\{exp\}/g, data.exp)
      .replace(/\$\{status\}/g, data.status);
  });
