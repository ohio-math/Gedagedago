self.addEventListener("fetch", event => {  
  let request = event.request;
  let letpass = () => { event.respondWith(fetch(request.url)) }; // Makes my life easier
  
  let config = {
    proxyServer: "https://fschwieb-2597dad56586.herokuapp.com", // Modify for other sites
    api: "https://fschwieb-2597dad56586.herokuapp.com/prox?url=*url*" // Modify for other servers
  };
  
  if (request.url.startsWith(config.proxyServer)) {
    letpass();
    return;
  };

  let encoded = encodeURIComponent(request.url);
  let modifiedURL = config.api.replace(/\*url\*/, encoded);
  event.respondWith( fetch(modifiedURL) );
});
