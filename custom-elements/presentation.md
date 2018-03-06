
<!-- .slide: data-background="../template/img/bg-1.png" -->

<h1 style="text-align: left; font-size: 80px;">Custom Elements<br>and Shadow DOM</h1>
<p style="text-align: left; font-size: 30px;">Patrick Arlt | <a href="https://twitter.com/patrickarlt">@patrickarlt</a></p>
<p style="text-align: left; font-size: 30px;">Slides: | <a href="http://bit.ly/2BJZm46">http://bit.ly/2BJZm46</a></p>
<p style="text-align: left; font-size: 30px;">Code: | <a href="http://bit.ly/2olUOJL">http://bit.ly/2olUOJL</a></p>

---

<!-- .slide: data-background="../template/img/bg-2.png" -->

# Custom Elements

* Create custom types of DOM Nodes
* Standardized component interface

```html
<my-button text="Send"></my-button>
<button is="my-button">Send</button>
```

---

<!-- .slide: data-background="../template/img/bg-2.png" -->

# Shadow DOM

* Isolate component DOM from page DOM
* `<slot>` for composing DOM

---

<!-- .slide: data-background="../template/img/bg-2.png" -->

3rd year of this talk

* 2016 - Custom Elements and Shadow DOM v1
* 2017 - Firefox and Safari add support
* 2018 - ???

---

<!-- .slide: data-background="../template/img/bg-2.png" -->

# What Custom Elements and Shadow DOM matter

* Framework interoperability
* Browser optimization
* Modular isolated components

---

<!-- .slide: data-background="../template/img/bg-2.png" -->

# A Simple Component

```
<copyable-text value="Copy Me!">Click to Copy</copyable-text>
```

---

<!-- .slide: data-background="../template/img/bg-2.png" -->

# So 2018?

* Custom Elements and Shadow DOM in all browsers
* All frameworks can fully consume Custom Elements
* Can authors Custom Elements with some frameworks

---

<!-- .slide: data-background="../template/img/bg-4.png" -->

## Browser Support

* Chrome - Full Support
* Firefox - Supported behind flag
* Safari - Full Support
* Edge - High Priority/In Development

---

<!-- .slide: data-background="../template/img/bg-4.png" -->

## Framework Support

All major frameworks (React, Vue, Angular, ect&hellip;) support integrating all aspects of Custom Elements and Shadow DOM.

Major Web Component frameworks (Polymer, Stencil, SkateJS) are unifying around NPM and ES6 Modules.

---

<!-- .slide: data-background="../template/img/bg-4.png" -->

## Frameworks Authoring Custom Elements

* Dojo 2 -> dojo-build-widget
* Angular -> Angular Elements
* Vue -> Vue CLI (`--target wc`)

---

<!-- .slide: data-background="../template/img/bg-4.png" -->

### Custom Elements with Dojo 2

* Use `@dojo/cli-build-app` to build a basic app with a component.
* Decorate component with `@customElement`
* Use `@dojo/cli-build-widget` to extract custom element.

---

<!-- .slide: data-background="../template/img/bg-4.png" -->

### Custom Elements with Vue

* Build a Vue CLI app
* Build with `--target=wc`

---

<!-- .slide: data-background="../template/img/bg-4.png" -->

## Using Custom Elements

Use your frameworks existing bindings for attibutes and events.

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

<!-- .slide: data-background="../template/img/bg-final.jpg" -->

<img src="../template/img/esri-science-logo-white.png" style="margin: 0; background: none; border: 0px; box-shadow: none;" />

* Slides: http://bit.ly/2BJZm46
* Code: http://bit.ly/2olUOJL
* Leave a Review:
  * Esri Events App
  * Dev Summit
  * Custom Elements and Shadow DOM
