
<!-- .slide: data-background="../template/img/bg-1.png" -->

<h1 style="text-align: left; font-size: 80px;">Custom Elements<br>and Shadow DOM</h1>
<p style="text-align: left; font-size: 30px;">Patrick Arlt | <a href="https://twitter.com/patrickarlt">@patrickarlt</a></p>
<p style="text-align: left; font-size: 30px;">Slides: | <a href="http://bit.ly/2BJZm46">http://bit.ly/2BJZm46</a></p>
<p style="text-align: left; font-size: 30px;">Code: | <a href="http://bit.ly/2olUOJL">http://bit.ly/2olUOJL</a></p>

---

<!-- .slide: data-background="../template/img/bg-2.png" -->

# 3rd year of this talk

* 2016 - Custom Elements and Shadow DOM v1
* 2017 - Firefox and Safari add support
* 2018 - ???

---

<!-- .slide: data-background="../template/img/bg-2.png" -->

# Frameworks at Esri

* Dojo - ArcGIS Online, ArcGIS API for JavaScript
* Angular - ArcGIS for Developers
* Ember - ArcGIS Hub
* React - Web App Builder, Storymaps
* Vue - ??

---

<!-- .slide: data-background="../template/img/bg-2.png" -->

# Why Custom Elements?

* Build componets once reuse in any framework
* Tend to very small and performant

---

<!-- .slide: data-background="../template/img/bg-2.png" -->

# Why **NOT** Custom Elements?

* Generally requires another tool/library
* Difficult to write by hand
* Poor (but polyfillable) browser support
* Unclear standardization track

---

<!-- .slide: data-background="../template/img/bg-2.png" -->

# Custom Elements in 2018

* Clearer standards track
* Better browser support
* Solid polyfills
* Build Custom Elements with popular frameworks

---

<!-- .slide: data-background="../template/img/bg-2.png" -->

# Custom Elements - Quick Recap

* Create custom HTMl Elements
* Use standard DOM APIs

---

<!-- .slide: data-background="../template/img/bg-2.png" -->

# Shadow DOM - Quick Recap

* Isolate custom element styles from outside CSS
* Isolate page styles from custom element styles
* Allow composing custom element childre into Shadow DOM

---

<!-- .slide: data-background="../template/img/bg-2.png" -->

# Vanilla JS Custom Elements

```html
<vanilla-card class="leader-1">
  <h4 class="trailer-0" slot="header">Content for header slot</h4>
  <p>Content for body slot&hellip;</p>
  <vanilla-copyable-text id="copy" label="Copy Me!" text="Copied!"></vanilla-copyable-text>
  <p class="font-size--2 text-dark-gray trailer-0" slot="footer">Content for footer slot.</p>
</vanilla-card>
```

[Demo]() @TODO

---

<!-- .slide: data-background="../template/img/bg-2.png" -->

# Recap

* Custom Elements allow creating new types of DOM nodes
* Shadow DOM is used to hide the exact implimentation details of our Custom Elements.
   * Outside CSS selctions don't affect Shadow DOM
   * Events triggered inside Shadow DOM are retargeted to come from the parent

---

<!-- .slide: data-background="../template/img/bg-2.png" -->

# Recap

* Custom Elements allow creating new types of DOM nodes
* Shadow DOM is used to hide the exact implimentation details of our Custom Elements.
   * Outside CSS selctions don't affect Shadow DOM
   * Events triggered inside Shadow DOM are retargeted to come from the parent

---

<!-- .slide: data-background="../template/img/bg-4.png" -->

## Boilerplate City

* `constructor`/`super()`
* No data binding
* Manual event binding
* Need a tempating system
* `observedAttributes`/`attributeChangedCallback`

---

<!-- .slide: data-background="../template/img/bg-4.png" -->

## Polyfilling Shadow DOM

Impossible to polyfill Shadow DOM to 100% accurate with the spec.

Specifcally style scoping is hard because Shadow DOM polyfills *MUST* appear in regular DOM where they are subjected to global styles.

Remember this for later.

---

<!-- .slide: data-background="../template/img/bg-4.png" -->

## Custom Element Specific Frameworks

* Polymer
* SkateJS
* StencilJS

---
<!-- .slide: data-background="../template/img/bg-4.png" -->

## Custom Elements with Application Frameworks

* Angular -> Angular Elements
* Dojo 2 -> dojo-build-widget
* Vue -> Vue CLI (`--target wc`)

---

# Custom Elements with Vue

Use Vue CLI with `--target=wc` to build existing Vue components as Custom Elements

[Demo]() @TODO

<!-- .slide: data-background="../template/img/bg-4.png" -->

---

<!-- .slide: data-background="../template/img/bg-4.png" -->

## Custom Elements with Vue

Vues `<slot>`s is differnt from native Shadow DOMs `<slot>`s.

Content only. No events or content in slots appear in normal DOM.

---

<!-- .slide: data-background="../template/img/bg-4.png" -->

## Custom Elements With Dojo 2

Use Dojo CLI with dojo-build-widget to build Custom Elements from Dojo 2 widgets.

---

<!-- .slide: data-background="../template/img/bg-4.png" -->

## Custom Elements With Dojo 2

No Shadow DOM at all. Custom Elements use CSS Modules for encapsulation.

---

<!-- .slide: data-background="../template/img/bg-4.png" -->

##  CSS Modules

* Like JavaScript Modules but for CSS.
* Each CSS class is "exported" from the modules
* Classes can be composed togather
* Classes are hashed to make them unique

[Demo]() @TODO

---

<!-- .slide: data-background="../template/img/bg-4.png" -->

## Problems with CSS Modules

* Difficult to work with existing CSS frameworks
* Can stil have style conflicts with existing CSS

---

<!-- .slide: data-background="../template/img/bg-4.png" -->

## CSS Pro Tip `all: initial`

Reset every CSS property to its initial default.

Use on anything you NEVER want to inherit ANY CSS.

Combine with CSS modules to prevent anything global from inheriting into your CSS modules code.

---

<!-- .slide: data-background="../template/img/bg-2.png" -->

# What Now?

We have our Custom Elements that we authored in regular JS, Vue and Dojo 2.

Now lets reuse them in a totally differnt framework.

[Demo]() @TODO

---

<!-- .slide: data-background="../template/img/bg-2.png" -->

# Framework Inception

* React App
  * Vanilla JS `<vanilla-card>`
    * Vue Copyable Text `<vue-copyable-text>`
    * Dojo Copyable Text `<dojo-2-copyable-text>`

---

<!-- .slide: data-background="../template/img/bg-2.png" -->

# 2018 Predictions?

* Custom Elements and Shadow DOM in all browsers
* All frameworks can fully consume Custom Elements
* Write Custom Elements with application frameworks

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

Since Custom Elements are "just DOM" you can generally use your framework to interact with Custom Elements just like normal DOM elements.

---

<!-- .slide: data-background="../template/img/bg-4.png" -->

## Build Custom Elements with Frameworks

* Dojo 2 - @dojo/cli-build-widget (Alpha)
* Vue - Vue CLI 3 (Alpha)
* Angular - Angular Elements (Alpha)

All of this should be stable later this year!

---

<!-- .slide: data-background="../template/img/bg-4.png" -->

The Web Components dream is coming true in 2018.

---

<!-- .slide: data-background="../template/img/bg-final.jpg" -->

<img src="../template/img/esri-science-logo-white.png" style="margin: 0; background: none; border: 0px; box-shadow: none;" />

* Slides: http://bit.ly/2BJZm46
* Code: http://bit.ly/2olUOJL
* Leave a Review:
  * Esri Events App
  * Dev Summit
  * Custom Elements and Shadow DOM
