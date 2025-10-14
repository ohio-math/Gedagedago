function msg(m, box, debug) {
  if (debug == false) return;
  if (box == null) {
    console.log(m);
  } else {
    box.innerText = m;
  }
}

export async function registerSW(debug = false, messagearea = null) {
  if ('serviceWorker' in navigator) {
    msg("Attempting to register service worker...", messagearea, debug);
    try {
      await navigator.serviceWorker.register("./sw.js", { scope: "/" });
      msg("Service worker registered successfully.", messagearea, debug);
    } catch (error) {
      msg("Service worker failed to register.", messagearea, debug);
    }
  } else {
    msg("Service Workers are not supported in your browser. Your navigator is: " + navigator.userAgent, messagearea, debug);
  }
}
