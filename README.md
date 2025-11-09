
---

## ✅ Development Checklist

### **Phase 1: Project Setup**
- [ ] Use **Manifest V3** to support Chrome + Firefox
- [ ] Create base directory and file layout
- [ ] Initialize development environment with **Flox**
  - [ ] Install Node
  - [ ] Install `webextension-polyfill`
- [ ] Initialize Git repository

---

### **Phase 2: Core Dark Mode**
- [ ] Define `manifest.json`:
  - [ ] Content script applies on all pages
  - [ ] `"matches": ["<all_urls>"]`
  - [ ] Add temporary extension icon
- [ ] Implement `content.js` to inject dark mode stylesheet
- [ ] Write `styles.css`:
  - [ ] Dark background
  - [ ] Light text colors
  - [ ] Fix buttons, links, form controls

---

### **Phase 3: Popup Toggle UI**
Add minimal GUI to enable/disable dark mode.
- [ ] Popup.html
- [ ] Popup.css
- [ ] Popup.js

- [ ] Create UI toggle switch
- [ ] Store state using `browser.storage.local`
- [ ] Ensure toggle updates page styling dynamically

---

### **Phase 4: Cross-Browser Support**
- [ ] Test on Chrome
- [ ] Test on Firefox
- [ ] Replace `chrome.*` calls with `browser.*`
- [ ] Use `webextension-polyfill` for API compatibility

---

### **Phase 5: Release v0.1**
- [ ] Code cleanup + comment removal
- [ ] Write documentation for usage + installation
- [ ] Package extension for Chrome (`.zip`)
- [ ] Package extension for Firefox (`.xpi`)
- [ ] Tag Git release of 'V0.1'
