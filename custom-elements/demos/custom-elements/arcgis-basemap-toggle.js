require([
  'esri/widgets/BasemapToggle/BasemapToggleViewModel'
], function (BasemapToggleViewModel) {

  class ArcGISBasemapToggleElement extends HTMLElement {
    /**
     * We want to observe changes to 2 attributes, one
     * is a reference to our webmap, the other is the
     * basemap we want to toggle with.
     */
    static get observedAttributes () {
      return ['webmap', 'basemap'];
    }

    /**
     * The elements constructor function, you must call `super()`
     * here and you can also do other one time setup here.
     */
    constructor () {
      super();
      this.style.display = 'block'; // be default custom elements are `inline`;

      this.button = document.createElement('button'); // setup a button for users to click
      this.button.textContent = 'Toggle';

      this.viewModel = new BasemapToggleViewModel(); // create a new view model
    }

    /**
     * Called when this elemetn is added to the DOM. This is called
     * every time the element is added so you should cleanup in the
     * disconnectedCallback lifecycle function.
     */
    connectedCallback () {
      this.appendChild(this.button); // add the button to the DOM as a child of this element
      this.setupViewModel(); // try to setup the view model
      this.addEventListener('click', this.handleClick); // listen for a click event to bubble up and handle it
    }

    /**
     * Called when the element is removed from the DOM. This mostly is for
     * cleaning up after ourselves.
     */
    disconnectedCallback () {
      this.removeEventListener('click', this.handleClick);
      if (this.boundViewHandler && this.webmap) {
        const webmap = document.getElementById(this.webmap);
        webmap.removeEventListener('arcigswebmapsetup', this.boundViewHandler);
      }
    }

    /**
     * Called when one of our observedAttributes changes. Careful this is also
     * called the first time many attributes are set. Often oldValue might be
     * the inital value of the attribute and newValue might be undefined or null.
     */
    attributeChangedCallback (attribute, oldValue, newValue) {
      // if we have a viewModel and a value update the viewModels value.
      if (attribute === 'basemap' && this.viewModel && newValue) {
        this.viewModel.nextBasemap = this.basemap;
      }

      // whenever any attribute changes try setting up our view model.
      this.setupViewModel();
    }

    /**
     * This function setup up the view model based on our webmap and basemap
     * attributes.
     */
    setupViewModel () {
      // make sure we have what we need.
      if(!this.webmap || !this.basemap) {
        return;
      }

      // try to find the <arcgis-web-map> element specified by our webmap attribue.
      const webmap = document.getElementById(this.webmap);

      // we have a webmap and that webmap has a view!
      if (webmap && webmap.view) {
        this.viewModel.nextBasemap = this.basemap;
        this.viewModel.view = webmap.view;

        // if we have a listener for the setup event remove it.
        if (this.boundViewHandler) {
          webmap.removeEventListener('arcigswebmapsetup', this.boundViewHandler);
          this.boundViewHandler = undefined;
        }
      }

      // we have a webmap but it doesn't have a view, wait for the seutp event then they this again.
      else if (webmap) {
        this.boundViewHandler = this.setupViewModel.bind(this);
        webmap.addEventListener('arcigswebmapsetup', this.boundViewHandler);
      }
    }

    /**
     * This is the callback of our click handler which will toggle the
     * basemap on the Map object.
     */
    handleClick (e) {
      this.viewModel.toggle();
      e.preventDefault();
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

    get basemap () {
      return this.getAttribute('basemap');
    }

    set basemap (value) {
      this.setAttribute('basemap', value);
    }
  }

  customElements.define('arcgis-basemap-toggle', ArcGISBasemapToggleElement);
});
