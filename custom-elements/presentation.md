<!-- .slide: data-background="../template/img/bg-1.png" -->

# Custom Elements and <br> Shadow DOM

### Cross-framework Web Development

Patrick Arlt | [@patrickarlt](https://twitter.com/patrickarlt)

Slides: http://bit.ly/2lZU2lI

Code: http://bit.ly/2mkyqRN

---

<!-- .slide: data-background="../template/img/bg-2.png" -->

I'm starting to notice something about JavaScript Frameworks&hellip;

---

<!-- .slide: data-background="../template/img/bg-2.png" -->

```html
<!-- Angular 2 -->
<delete-button [item]="..." (click)="..."></delete-button>
```

```html
<!-- Vue JS -->
<delete-button item="..." v-on:click="..."><delete-button>
```

```html
<!-- Ember -->
{{delete-button item="..." onclick="..."}}
```

```html
<!-- React -->
<DeleteButton item="..." onClick="..." />
```

---

<!-- .slide: data-background="../template/img/bg-2.png" -->

## Trees of Components&hellip;

* Manage a tree of components
* Pass data down
* Listen for events up

---

<!-- .slide: data-background="../template/img/bg-2.png" -->

## Wait a sec isn't this just the DOM?

---

<!-- .slide: data-background="../template/img/bg-4.png" -->

## Enter Web Components

Web Components allow creating custom HTML tags like our <br>`<delete-button>`. But without a framework.

---

<!-- .slide: data-background="../template/img/bg-4.png" -->

## Why Web Components

Write components once, consume in any framework. Abstract differences in systems via HTML.

---

<!-- .slide: data-background="../template/img/bg-4.png" -->

## The Web Component Standards

* Custom Elements
* Shadow DOM
* Templates
* HTML Imports

---

<!-- .slide: data-background="../template/img/bg-4.png" -->

### Custom Elements

Register custom HTML tags with the browser.

---

<!-- .slide: data-background="../template/img/bg-4.png" -->

```js
class MyElement extends HTMLElement {
  // return an array of the attribute names you want to watch for changes.
  static get observedAttributes() {
    return ["attribute"];
  }

  // called when the element is first created. You must call `super()`
  constructor() {
    super();
  }

  // called when the element is added to the DOM
  connectedCallback() {}

  // called when the element is removed from the DOM
  disconnectedCallback() {}

  // called when one of your `observedAttributes` changes
  attributeChangedCallback(attr, oldValue, newValue) {}
}

// first parameter is the tag name, second is the class
customElements.define("my-element", MyElement);
```

---

<!-- .slide: data-background="../template/img/bg-4.png" -->

### Custom Element and The JS API

By combining custom elements and the JS API we can make reusable mapping components that we can custom HTML Elements and share across frameworks.

* `<arcgis-web-map>` - [Demo](./demos/custom-elements-map.html)
* `<arcgis-layer-list>` - [Demo](./demos/custom-elements-layer-list.html)
* `<arcgis-basemap-toggle>` - [Demo](./demos/custom-elements-basemap-toggle.html)

---

<!-- .slide: data-background="../template/img/bg-4.png" -->

### 2 Problems

* Change the content of our toggle?
* Isolate the implimentation details of our components?

---

<!-- .slide: data-background="../template/img/bg-5.png" -->

## Shadow DOM

Reduce the "global" nature of JavaScript, CSS and HTML.

* **Isolate** internal DOM inside components - [Demo](./demos/shadow-dom-isolation.html)
* **Scope** CSS inside components - [Demo](./demos/shadow-dom-scoped-css.html)
* **Compose** external DOM and interal DOM - [Demo](./demos/shadow-dom-composition.html)

---

<!-- .slide: data-background="../template/img/bg-5.png" -->

### `<arcgis-basemap-toggle>`

Shadow DOM isolates the DOM and CSS of our <br>`<arcgis-basemap-toggle>`.

[Demo](./demos/custom-element-with-shadow-dom.html)

---

<!-- .slide: data-background="../template/img/bg-5.png" -->

## Quick Review

* 3 custom elements
* Isolated DOM and CSS

---

<!-- .slide: data-background="../template/img/bg-2.png" -->

## Web Components in Frameworks

* [React](http://patrickarlt.com/dev-summit-2017-talks/custom-elements/demos/react-app/build/)
* [Angular](http://patrickarlt.com/dev-summit-2017-talks/custom-elements/demos/angular-app/dist/)

---

<!-- .slide: data-background="../template/img/bg-2.png" -->

## Maximize Compatibility

* Always use `this.dispatchEvent` and `CustomEvent`
* Don't use fancy event names like `web-map-setup`. Use `webmapsetup` instead
* Always declare matching properties for your attributes

---

<!-- .slide: data-background="../template/img/bg-2.png" -->

## Modern Browser Support

|                 | Chrome | Safari | Firefox                                                        | Edge                                                                                               |
| --------------- | ------ | ------ | -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Custom Elements | ✓      | ✓      | [In-Dev](https://platform-status.mozilla.org/#shadow-dom)      | [Dev Soon](https://developer.microsoft.com/en-us/microsoft-edge/platform/status/shadowdom/)        |
| Shadow DOM      | ✓      | ✓      | [In-Dev](https://platform-status.mozilla.org/#custom-elements) | [Dev Likely](https://developer.microsoft.com/en-us/microsoft-edge/platform/status/customelements/) |
| Templates       | ✓      | ✓      | ✓                                                              | ✓                                                                                                  |
| HTML Imports    | ✓      | ✕      | ✕                                                              | ✕                                                                                                  |

---

<!-- .slide: data-background="../template/img/bg-2.png" -->

## Using Custom Elements Today

1. Polyfill the spec

* [Web Components polyfill](https://github.com/webcomponents/custom-elements)
* [Lightweight ~3k polyfill](https://github.com/WebReflection/document-register-element)

2. Compile with Babel or TypeScript

* Makes the new ES2015 class syntax work

---

<!-- .slide: data-background="../template/img/bg-2.png" -->

## Custom Elements on <br>ArcGIS for Developers

Share code among the different build systems and tools

* `<developers-download-button>`
* `<developers-sign-in>`
* `<developers-search>`
* ~16 elements total

---

<!-- .slide: data-background="../template/img/bg-2.png" -->

## Use Cases for Custom Elements

Custom Elements are best for sharing code among different sites, frameworks and apps.

Don't make apps, make UI components.

---

<!-- .slide: data-background="../template/img/bg-2.png" -->

## Using Shadow DOM Today

Don't. The [ShadyDOM](https://github.com/webcomponents/shadydom) and [ShadyCSS](https://github.com/webcomponents/shadycss) polyfill are highly unstable.

---

<!-- .slide: data-background="../template/img/bg-2.png" -->

## The Future of Shadow DOM

Soon.

---

<!-- .slide: data-background="../template/img/bg-2.png" -->

## Bright Future

* Shadow DOM will get wide support
* Custom Elements is easy to use and polyfill

---

<!-- .slide: data-background="../template/img/bg-4.png" -->

# Thank You!

* Slides: http://bit.ly/2lZU2lI

### Leave Feedback

* Download the Esri Events App
* Go to Dev Summit
* Select "Custom Elements and Shadow DOM:<br>Cross-framework Web Development"
* Leave a Review!

---

<!-- .slide: data-background="../template/img/bg-6.png" -->
