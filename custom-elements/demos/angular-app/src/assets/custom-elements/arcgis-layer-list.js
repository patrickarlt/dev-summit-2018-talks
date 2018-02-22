require([
  'esri/widgets/LayerList'
], function (LayerList) {
  class ArcGISLayerListElement extends HTMLElement {
    /**
     * We want to observe changes an attribute, which
     * is a reference to our webmap.
     */
    static get observedAttributes () {
      return ['webmap'];
    }

    /**
     * The elements constructor function, you must call `super()`
     * here and you can also do other one time setup here.
     */
    constructor () {
      super();
      this.style.display = 'block';
      this.container = document.createElement('div');
      this.list = new LayerList({
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
      this.setupLayerList();
    }

    /**
     * Called when the element is removed from the DOM. This mostly is for
     * cleaning up after ourselves.
     */
    disconnectedCallback () {
      this.removeChild(this.container);
    }

    /**
     * Called when one of our observedAttributes changes. Careful this is also
     * called the first time many attributes are set. Often oldValue might be
     * the inital value of the attribute and newValue might be undefined or null.
     */
    attributeChangedCallback (attribute, oldValue, newValue) {
      if (attribute === 'webmap') {
        if (newValue || !newValue && oldValue) {
          this.setupLayerList();
        }
      }
    }

    /**
     * This function sets up the layer list widget.
     */
    setupLayerList () {
      if(!this.webmap) {
        return;
      }

      const webmap = document.getElementById(this.webmap);

      // we have a webmap and that webmap has a view!
      if(webmap && webmap.view) {
        this.list.
        view = webmap.view;

        // if we have a listener for the setup event remove it.
        if (this.boundViewHandler) {
          webmap.removeEventListener('arcigswebmapsetup', this.boundViewHandler);
        }
      }

      // we have a webmap but it doesn't have a view, wait for the seutp event then they this again.
      else if (webmap) {
        this.boundViewHandler = this.setupLayerList.bind(this);
        webmap.addEventListener('arcigswebmapsetup', this.boundViewHandler);
      }
    }

    /**
     * These getters and setters expose properties to JavaScript that mirror the
     * attributes. This is neccessary since some frameworks bind to these attributes
     * rather then DOM properties and this makes your DOM elements easier to work
     * with in JavaScript.
     */
    get webmap () {
      return this.getAttribute('webmap');
    }

    set webmap (value) {
      this.setAttribute('webmap', value);
    }
  }

  customElements.define('arcgis-layer-list', ArcGISLayerListElement);
});
