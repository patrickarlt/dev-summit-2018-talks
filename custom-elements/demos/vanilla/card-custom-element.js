class CardElement extends HTMLElement {
  constructor() {
    super();

    var shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        .card-wrapper {
          border: 1px solid #efefef;
        }

        header {
          padding: .25rem;
          background: #f8f8f8;
          border-bottom: 1px solid #efefef;
        }

        .card-body {
          padding: .25rem;
        }

        footer {
          padding: .25rem;
          background: #f8f8f8;
          border-top: 1px solid #efefef;
        }
      </style>

      <section class="card-wrapper">
        <header>
          <p>In header</p>
          <slot name="header"></slot>
        </header>

        <div class="card-body">
          <slot></slot>
        </div>

        <footer>
          <slot name="footer"></slot>
        </footer>
      </section>
    `;
  }

  connectedCallback() {
    this.style.display = "block";
  }
}

customElements.define('demo-card', CardElement);
