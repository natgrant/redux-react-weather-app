import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: "",
      error: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({ term: e.target.value });
  }

  onFormSubmit = e => {
    e.preventDefault();

    // We need to go and fetch weather data here:
    if (this.state.term === "") {
      this.setState({
        error: true
      });
    } else {
      this.props.fetchWeather(this.state.term);
      this.setState({ term: "" });
    }
  };

  render() {
    return (
      <div>
        {" "}
        <form onSubmit={this.onFormSubmit} className="input-group">
          <input
            placeholder="Get a 5 day forecast in your favourite cities"
            className="form-control"
            type="text"
            value={this.state.term}
            onChange={this.handleInputChange}
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-info">
              Submit!
            </button>
          </span>
        </form>
        {this.state.error && (
          <p className="error-null-entry">Please enter a city...</p>
        )}
      </div>
    );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(
  null,
  matchDispatchToProps
)(SearchBar);
