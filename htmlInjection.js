async function injectHTML(path, element) {
  let response = await fetch(path);

  if (!response?.ok) return;

  const htmlElement = await response.text();
  element.innerHTML = htmlElement;

  element.querySelectorAll("script").forEach((script) => {
    const newScript = document.createElement("script");

    Array.from(script.attributes).forEach((attr) =>
      newScript.setAttribute(attr.name, attr.value)
    );

    newScript.appendChild(document.createTextNode(script.innerHTML));
    script.parentNode.replaceChild(newScript, script);
  });
}

export async function injectAll() {
  let elements = document.querySelectorAll("[include]");

  while (elements.length > 0) {
    for (let customElement of elements) {
      await injectHTML(customElement.getAttribute("include"), customElement);
      customElement.removeAttribute("include");
    }

    elements = document.querySelectorAll("[include]");
  }
}
