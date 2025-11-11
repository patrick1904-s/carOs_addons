const toggle = document.getElementById("toggle");

// Load stored state
browser.storage.local.get("enabled").then(result => {
  toggle.checked = result.enabled ?? true;
});

// On toggle change → update storage
toggle.addEventListener("change", () => {
  browser.storage.local.set({ enabled: toggle.checked });
  // Tell all tabs to update
  browser.tabs.query({}).then(tabs => {
    for (let tab of tabs) {
      browser.tabs.sendMessage(tab.id, { enabled: toggle.checked });
    }
  });
});

