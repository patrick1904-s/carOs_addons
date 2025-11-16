const toggle = document.getElementById("toggle");

browser.storage.local.get("enabled").then(result => {
  toggle.checked = result.enabled ?? true;
});

toggle.addEventListener("change", () => {
  browser.storage.local.set({ enabled: toggle.checked });
  browser.tabs.query({}).then(tabs => {
    for (let tab of tabs) {
      browser.tabs.sendMessage(tab.id, { enabled: toggle.checked });
    }
  });
});

