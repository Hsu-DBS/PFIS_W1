class MyGreeting extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = `
      <style>
        p { color: blue; font-size: 18px; }
        button { margin-top: 10px; }
      </style>
      <p id="message">Welcome! Click 'Change Text' To Change Text</p>
      <button id="btn">Change Text</button>
    `;

    const button = this.shadowRoot.querySelector("#btn");
    const message = this.shadowRoot.querySelector("#message");

    button.addEventListener("click", () => {
      message.textContent = "Text Changed";
    });
  }
}

customElements.define("my-greeting", MyGreeting);
