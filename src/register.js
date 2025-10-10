function msg(m, box, debug) {
  if (debug == false) return;
  if (box == null) {
    console.log(m);
  } else {
    box.innerText = m;
  }
}

export function registerSW(messagebox = null, debug = false) {
  if ('serviceWorker' in navigator) {
    msg("Attempting to register service worker...", messagebox, debug);
    navigator.serviceWorker.register("./sw.js", { scope: "/" })
    .then(() => {
      msg("Service worker successfully registered", messagebox, debug);
    })
    .then((error) => {
      msg("Service worker registration failed", messagebox, debug);
    });
  
  } else {
    msg("Service Workers are not supported in your browser. Your navigator is: " + navigator.userAgent, messagebox, debug);
  }
}
