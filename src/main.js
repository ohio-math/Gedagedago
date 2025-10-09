if ('serviceWorker' in navigator) {
  messagebox.innerText = "Attempting to register service worker...";
  navigator.serviceWorker.register("./sw.js", { scope: "/" })
    .then(() => {
      messagebox.innerText = "Service worker successfully registered";
    })
    .then((error) => {
      messagebox.innerText = "Service worker registration failed";
    });
  
} else {
  messagebox.innerText = "Service Workers are not supported in your browser. Your navigator is: " + navigator.userAgent;
}

