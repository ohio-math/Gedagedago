let config = {
  proxyServer: "https://fschwieb-2597dad56586.herokuapp.com", // Home proxy server
  api: "https://fschwieb-2597dad56586.herokuapp.com/prox?url=*url*" // If customizing server, put the url to use and put *url* for the url
};

// let proxyServerWorks = true;

async function handle(event) {
  let request = event.request;
  let letpass = (e) => { e.respondWith(fetch(request)) };
  
  if (request.url.startsWith(config.proxyServer)) {
    return letpass;
  };

  let encoded = encodeURIComponent(request.url);
  let newURL = config.api.replace("*url*", encoded);

  let b = ["GET", "DELETE"].includes(request.mode) ? await request.clone().blob().text() : null;


  let newRequest = new Request(newURL, {
    headers: request.headers,
    referrer: request.referrer,
    redirect: request.redirect,
    body: b,
    mode: request.mode
  });
  
  return () => fetch(newRequest);
}

self.addEventListener("activate", event => {
  event.waitUntil(async () => {
    await fetch(config.proxyServer); // Wake up proxy server
  });
});

self.addEventListener("fetch", event => {
  event.respondWith(handle(event));
});
