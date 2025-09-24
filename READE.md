# Add Pop-up Modal After Add to Cart Using Mixin

## Implementation

### 1. Research (8h)

Before starting the task, I have done the following:

1. Reviewed Magento documentation:
    - Layouts
    - Templates
    - JS Mixins
    - Magento UI Widgets
2. Read blogs and watched videos on how mixins are implemented.

### 2. Blockers (8h)

1. Initially, I tried adding the mixin logic inside my theme, but it didn’t work:
    - JS file was not loaded when inspecting browser static files.
    - "Owner not found" exception.
    - `requireJs` not loaded exception (later realized I had to wait until it loaded).

### 3. Implementation (6h)

1. Started working on a custom module to create a basic mixin that works in the browser.
2. Added modal widget and began manipulating its options.
3. Added the modal logic inside my mixin.

---

**Total: 22h**
