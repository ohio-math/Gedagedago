function msg(m, box, debug) {
  if (debug == false) return;
  if (box == null) {
    console.log(m);
  } else {
    box.innerText = m;
  }
}

export function registerSW(debug = false, messagearea = null) {
  if ('serviceWorker' in navigator) {
    msg("Attempting to register service worker...", messagearea, debug);
    navigator.serviceWorker.register("./sw.js", { scope: "/" })
    .then(() => {
      msg("Service worker successfully registered", messagearea, debug);
    })
    .then((error) => {
      msg("Service worker registration failed", messagearea, debug);
    });
  
  } else {
    msg("Service Workers are not supported in your browser. Your navigator is: " + navigator.userAgent, messagearea, debug);
  }
}
