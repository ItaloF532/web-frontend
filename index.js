import { injectAll }  from "./htmlInjection.js"

document.addEventListener("DOMContentLoaded", async() => {
  await injectAll()
})