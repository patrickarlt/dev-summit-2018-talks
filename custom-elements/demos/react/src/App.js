import React, { Component } from 'react';

class App extends Component {
  logVueEvent() {
    console.log("copy event from Vue");
  }

  logDojo2Event() {
    console.log("copy event from Dojo 2");
  }
  componentDidMount() {
    // When the component is mounted, add your DOM listener to the "nv" elem.
    // (The "nv" elem is assigned in the render function.)
    this.vue.addEventListener("copy", this.logVueEvent);
    this.dojo2.addEventListener("copy", this.logDojo2Event);
  }

  componentWillUnmount() {
    // Make sure to remove the DOM listener when the component is unmounted.
    this.vue.removeEventListener("copy", this.logVueEvent);
    this.dojo2.removeEventListener("copy", this.logDojo2Event);
  }

  render() {
    return (
      <div className="App">

        <vanilla-card className="leader-1">
          <h4 className="trailer-0" slot="header">Header</h4>
          <h1 className="leader-1 trailer-half">Vue Copyable Text</h1>
          <vue-copyable-text ref={elem => this.vue = elem} label="Copy Me!" text="Copied!"></vue-copyable-text>

          <h1 className="leader-1 trailer-half">Dojo 2 Copyable Text</h1>
          <dojo-2-copyable-text ref={elem => this.dojo2 = elem} onCopy={this.logDojo2Event} label="Copy Me!" text="Copied!"></dojo-2-copyable-text>
          <p className="font-size--2 text-dark-gray trailer-0" slot="footer">Misc Info</p>
        </vanilla-card>
      </div>
    );
  }
}

export default App;
