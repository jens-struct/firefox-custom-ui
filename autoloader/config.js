// skip 1st line with a comment, otherwise config loading will fail
try {
  const cmanifest = Cc['@mozilla.org/file/directory_service;1'].getService(Ci.nsIProperties).get('UChrm', Ci.nsIFile);
  cmanifest.append('chrome.manifest');

  if (cmanifest.exists()) {
    Components.manager.QueryInterface(Ci.nsIComponentRegistrar).autoRegister(cmanifest);
  }
} catch {}
