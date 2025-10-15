class MyGreeting extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = `
      <style>
        p { color: blue; font-size: 18px; }
        button { margin-top: 10px; }
      </style>
      <p id="message">Hello from Shadow DOM!</p>
      <button id="btn">Change Text</button>
    `;

    const button = this.shadowRoot.querySelector("#btn");
    const message = this.shadowRoot.querySelector("#message");

    button.addEventListener("click", () => {
      message.textContent = "Text changed inside Shadow DOM!";
    });
  }
}

customElements.define("my-greeting", MyGreeting);
