
---

## ✅ Development Checklist

### **Phase 1: Project Setup**
- [X] Use **Manifest V3** to support Chrome + Firefox
- [X] Create base directory and file layout
- [X] Initialize development environment with **Flox**
  - [X] Install Node
  - [X] Install `webextension-polyfill`
- [X] Initialize Git repository

---

### **Phase 2: Core Dark Mode**
- [X] Define `manifest.json`:
  - [X] Content script applies on all pages
  - [X] `"matches": ["<all_urls>"]`
  - [X] Add temporary extension icon
- [X] Implement `content.js` to inject dark mode stylesheet
- [X] Write `styles.css`:
  - [X] Dark background
  - [X] Light text colors
  - [X] Fix buttons, links, form controls

---

### **Phase 3: Popup Toggle UI**
Add minimal GUI to enable/disable dark mode.
- [X] Popup.html
- [X] Popup.css
- [X] Popup.js

- [X] Create UI toggle switch
- [X] Store state using `browser.storage.local`
- [X] Ensure toggle updates page styling dynamically

---

### **Phase 4: Cross-Browser Support**
- [ ] Test on Chrome
- [X] Test on Firefox
- [ ] Replace `chrome.*` calls with `browser.*`
- [ ] Use `webextension-polyfill` for API compatibility

---

### **Phase 5: Release v0.1**
- [ ] Code cleanup + comment removal
- [ ] Write documentation for usage + installation
- [ ] Package extension for Chrome (`.zip`)
- [ ] Package extension for Firefox (`.xpi`)
- [ ] Tag Git release of 'V0.1'
