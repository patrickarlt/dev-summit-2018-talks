class CopyableTextElement extends HTMLElement {
  static get observedAttributes() {
    return ['text', 'label'];
  }

  constructor() {
    super();

    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadow.innerHTML = `
      <style>
        .wrapper {
          display: flex;
        }

        input {
          flex: 1 1 auto;
        }

        button {
          flex: 0 0 auto;
        }
      </style>

      <div class="wrapper">
        <input type="text" value="${this.text}"></input>
        <button>${this.label}</button>
      </div>
    `;
    this.input = this.shadow.querySelector('input');
    this.button = this.shadow.querySelector('button');
  }

  connectedCallback() {
    this._boundClickHandler = this._handleClick.bind(this);
    this.button.addEventListener('click', this._boundClickHandler);
  }

  disconnectedCallback() {
    this.button.removeEventListener('click', this._boundClickHandler);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "text":
        this.input.value = newValue;
      case "button":
        this.button.innerText = newValue;
    }
  }

  get text() {
    return this.getAttribute('text');
  }

  set text(value) {
    this.setAttribute("text", value);
  }

  get label() {
    return this.getAttribute('label');
  }

  set label(value) {
    this.setAttribute("label", value);
  }

  _handleClick(e) {
    this._copyTarget = document.createElement('input');
    this._copyTarget.value = this.text;
    this.shadow.appendChild(this._copyTarget);

    try {
      this._copyTarget.select();
      document.execCommand('copy');
    } catch (err) {
      console.log(err);
      input.select();
    } finally {
      this.shadow.removeChild(this._copyTarget);
      this._copyTarget = null;
    }
  }
}

customElements.define('demo-copyable-text', CopyableTextElement);
