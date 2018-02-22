require([
  "esri/views/MapView",
  "esri/WebMap"
], function (MapView, WebMap) {

  class ArcGISWebMapElement extends HTMLElement {
    /**
     * We want to observe changes an attribute, which
     * is a reference to our webmap.
     */
    static get observedAttributes () {
      return ['webmapid'];
    }

    /**
     * The elements constructor function, you must call `super()`
     * here and you can also do other one time setup here.
     */
    constructor () {
      super();

      // setup a container for our map view
      this.container = document.createElement('div');
      this.container.style.width = '100%';
      this.container.style.height = '100%';
      this.style.display = 'block';

      // setup at the MapView to point to our container
      this.view = new MapView({
        container: this.container
      });
    }

    /**
     * Called when this elemetn is added to the DOM. This is called
     * every time the element is added so you should cleanup in the
     * disconnectedCallback lifecycle function.
     */
    connectedCallback () {
      this.appendChild(this.container);
      this.setupMap();
    }

    /**
     * Called when the element is removed from the DOM. This mostly is for
     * cleaning up after ourselves.
     */
    disconnectedCallback () {
      this.removeChild(this.container);
      this.view.destroy();
    }

    /**
     * Called when one of our observedAttributes changes. Careful this is also
     * called the first time many attributes are set. Often oldValue might be
     * the inital value of the attribute and newValue might be undefined or null.
     */
    attributeChangedCallback (attribute, oldValue, newValue) {
      if (attribute === 'webmapid') {
        if (newValue || !newValue && oldValue) {
          this.map = new WebMap({
            portalItem: {
              id: this.webmapid
            }
          });

          this.setupMap();
        }
      }
    }


    /**
     * This function sets up the map inside our map view.
     */
    setupMap () {
      if (!this.map || !this.view) {
        return;
      }

      this.view.map = this.map;
      this.dispatchEvent(new CustomEvent('arcigswebmapsetup',{
        bubbles: true,
        cancelable: true
      }));
    }

    /**
     * These getters and setters expose properties to JavaScript that mirror the
     * attributes. This is neccessary since some frameworks bind to these attributes
     * rather then DOM properties and this makes your DOM elements easier to work
     * with in JavaScript.
     */
    get webmapid () {
      return this.getAttribute('webmapid');
    }

    set webmapid (value) {
      this.setAttribute('webmapid', value);
    }
  }

  customElements.define('arcgis-web-map', ArcGISWebMapElement);
});
