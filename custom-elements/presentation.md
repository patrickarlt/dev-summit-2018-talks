
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

# Some Simple Components

```html
<demo-card class="leader-1">
  <h4 class="trailer-0" slot="header">Header</h4>
  <p>This is the body of the card&hellip;</p>
  <demo-copyable-text label="Copy Me!" text="Copied!"></demo-copyable-text>
  <p class="font-size--2 text-dark-gray trailer-0" slot="footer">Misc Info</p>
</demo-card>
```

---

## Boilerplate City

* `constructor`/`super()`
* No data binding
* Manual event binding
* Need a tempating system
* `observedAttributes`/`attributeChangedCallback`

---

<!-- .slide: data-background="../template/img/bg-4.png" -->

## Make Custom Elements With Frameworks

* Dojo 2 -> dojo-build-widget
* Angular -> Angular Elements
* Vue -> Vue CLI (`--target wc`)

---

<!-- .slide: data-background="../template/img/bg-4.png" -->

### Custom Elements with Vue

* Make a Vue CLI app
* Build components with `--target=wc`

---

<!-- .slide: data-background="../template/img/bg-4.png" -->

## Using Custom Elements

Use your frameworks existing bindings for attibutes and events.

```html
@TODO
```

---

<!-- .slide: data-background="../template/img/bg-4.png" -->

## Custom Elements in React

[Demo]() @TODO

---

<!-- .slide: data-background="../template/img/bg-4.png" -->

## Practical Custom Elements

* IE 11 support isn't ideal, [but possible](https://github.com/webcomponents/custom-elements#es5-vs-es2015).
* ShadyDOMs CSS Encapsulation is REALLY imperfect.

---

<!-- .slide: data-background="../template/img/bg-4.png" -->

## Enter CSS Modules

* Like JavaScript Modules but for CSS.
* Each CSS class is "exported" from the modules
* Classes can be composed togather
* Classes are hashed to make them unique

@TODO VUE AND DOJO DEMOS

---

<!-- .slide: data-background="../template/img/bg-4.png" -->

## Problems with CSS Modules

* Difficult to work with frameworks (Bootstrap, Calcite Web, ect...)
* Wants to own your whole app.

---

<!-- .slide: data-background="../template/img/bg-4.png" -->

## CSS Pro Tip `all: inherit`

The sledgehammer of CSS. Reset every CSS property to its initial default.

Slap it on anything you NEVER want to inherit ANY CSS.

Combine with CSS modules to prevent anything global from inheriting into your CSS modules code.

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

<!-- .slide: data-background="../template/img/bg-final.jpg" -->

<img src="../template/img/esri-science-logo-white.png" style="margin: 0; background: none; border: 0px; box-shadow: none;" />

* Slides: http://bit.ly/2BJZm46
* Code: http://bit.ly/2olUOJL
* Leave a Review:
  * Esri Events App
  * Dev Summit
  * Custom Elements and Shadow DOM
