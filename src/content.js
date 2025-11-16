// // NightShift Lite (v0.1)
// Currently all dark mode styling is handled in style.c
function applyState(enabled) {
  document.documentElement.setAttribute("data-nightshift", enabled ? "on" : "off");
}

browser.storage.local.get("enabled").then(result => {
  applyState(result.enabled ?? true);
});

browser.runtime.onMessage.addListener((msg) => {
  applyState(msg.enabled);
});

