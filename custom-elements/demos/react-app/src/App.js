import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      webmap: '6e3ef9427a07417e9e576c1652fbdbc4'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount () {
    this.updateWebmap();
  }

  componentDidUpdate () {
    this.updateWebmap();
  }

  updateWebmap () {
    ReactDOM.findDOMNode(this.webmap).setAttribute('webmapid', this.state.webmap);
  }

  handleChange(event) {
    this.setState({
      webmap: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="wrapper">
        <div className="sidebar">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Web map ID</label>
              <input type="text" className="form-control" value={this.state.webmap} onChange={this.handleChange} />
              <small>cd8c73d38a664772b9f56e530f0725a8</small>
            </div>
            <button type="submit" className="btn btn-default">Update</button>
          </form>
          <arcgis-layer-list webmap="webmap"></arcgis-layer-list>
        </div>

        <div className="map">
          <arcgis-web-map id="webmap" ref={(ref) => this.webmap = ref}></arcgis-web-map>
          <arcgis-basemap-toggle basemap="gray-vector" webmap="webmap">
            <button>Toggle Basemap</button>
          </arcgis-basemap-toggle>
        </div>
      </div>
    );
  }
}

export default App;
