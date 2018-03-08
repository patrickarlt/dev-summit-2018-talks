
<!-- .slide: data-background="../template/img/bg-1.png" -->

<h1 style="text-align: left; font-size: 80px;">Custom Elements<br>and Shadow DOM</h1>
<p style="text-align: left; font-size: 30px;">Patrick Arlt | <a href="https://twitter.com/patrickarlt">@patrickarlt</a></p>
<p style="text-align: left; font-size: 30px;">Slides: | <a href="http://bit.ly/2BJZm46"><code>http://bit.ly/2BJZm46</code></a></p>
<p style="text-align: left; font-size: 30px;">Code: | <a href="http://bit.ly/2olUOJL"><code>http://bit.ly/2olUOJL</code></a></p>

---

<!-- .slide: data-background="../template/img/bg-3.png" -->

# Frameworks at Esri

* Dojo - ArcGIS Online, ArcGIS API for JavaScript
* Angular - ArcGIS for Developers
* Ember - ArcGIS Hub
* React - Web App Builder, Storymaps
* Vue - ??

---

<!-- .slide: data-background="../template/img/bg-2.png" -->

# Why **NOT** Custom Elements?

* Generally requires another tool/library
* Difficult to write by hand
* Poor (but polyfillable) browser support
* Unclear standardization track
* Some parts can't be 100% polyfilled

---

<!-- .slide: data-background="../template/img/bg-7.png" -->

# Vanilla JS Custom Elements

```html
<vanilla-card class="leader-1">
  <h4 class="trailer-0" slot="header">Content for header slot</h4>
  <p>Content for body slot&hellip;</p>
  <vanilla-copyable-text id="copy" label="Copy Me!" text="Copied!"></vanilla-copyable-text>
  <p class="font-size--2 text-dark-gray trailer-0" slot="footer">Content for footer slot.</p>
</vanilla-card>
```

[Demo](https://github.com/patrickarlt/dev-summit-2018-talks/tree/master/custom-elements/demos/vanilla)

---

<!-- .slide: data-background="../template/img/bg-6.png" -->

# Recap

* Custom Elements for new types of DOM nodes
* Shadow DOM:
   * CSS encapsulation
   * Events retargeting
   * Composition

---

<!-- .slide: data-background="../template/img/bg-5.png" -->

# Custom Element Specific Frameworks

Solve boilerplat and common issues with Custom Elements

* [Polymer](https://www.polymer-project.org/)
* [SkateJS](https://github.com/skatejs/skatejs)
* [StencilJS](https://stenciljs.com/)

---

<!-- .slide: data-background="../template/img/bg-6.png" -->

# Custom Elements with Application Frameworks

Build Custom Elements from your existing application code

* [Angular](https://angular.io/) -> [Angular Elements](https://github.com/angular/angular/pull/21939)
* [Dojo 2](https://dojo.io/) -> [dojo-build-widget](https://github.com/dojo/cli-build-widget)
* [Vue](https://github.com/vuejs/vue-cli) -> [Vue CLI (`--target wc`)](https://github.com/vuejs/vue-cli/blob/dev/docs/build-targets.md#web-component)

No more seperate tooling!

---

# Custom Elements with Vue

Vue CLI with [`--target=wc`](https://github.com/vuejs/vue-cli/blob/dev/docs/build-targets.md#web-component) to build Vue components as Custom Elements

[Demo](https://github.com/patrickarlt/dev-summit-2018-talks/tree/master/custom-elements/demos/vue)

<!-- .slide: data-background="../template/img/bg-5.png" -->

---

<!-- .slide: data-background="../template/img/bg-2.png" -->

# Custom Elements With Dojo 2

Use Dojo CLI with [dojo-build-widget](https://github.com/dojo/cli-build-widget) to build Custom Elements with Dojo 2.

[Demo](https://github.com/patrickarlt/dev-summit-2018-talks/tree/master/custom-elements/demos/dojo-2)

---

<!-- .slide: data-background="../template/img/bg-5.png" -->

#  CSS Modules

* JS Modules but for CSS
* CSS classes are "exported"
* Compose togather
* Unique class names are hased

[Demo](https://github.com/patrickarlt/dev-summit-2018-talks/tree/master/custom-elements/demos/dojo-2/src/widgets/CopyableText)

---

<!-- .slide: data-background="../template/img/bg-4.png" -->

# Framework Inception

* React App
  * Vanilla JS `<vanilla-card>`
    * Vue Copyable Text `<vue-copyable-text>`
    * Dojo Copyable Text `<dojo-2-copyable-text>`

[Demo](https://github.com/patrickarlt/dev-summit-2018-talks/tree/master/custom-elements/demos/react)

---

<!-- .slide: data-background="../template/img/bg-2.png" -->

# Why Custom Elements?

* Use existing tools
* Use CSS Modules for CSS encapsultaion
* Clear standard implimented by browsers
* Stable polyfills
* Shadow DOM can be polyfilled if need be

---

<!-- .slide: data-background="../template/img/bg-final.jpg" -->

<img src="../template/img/esri-science-logo-white.png" style="margin: 0; background: none; border: 0px; box-shadow: none;" />

* Slides: [`http://bit.ly/2BJZm46`](http://bit.ly/2BJZm46)
* Code: [`http://bit.ly/2olUOJL`](http://bit.ly/2olUOJL)
* Leave a Review:
  * Esri Events App
  * Dev Summit
  * Custom Elements and Shadow DOM
