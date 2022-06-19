
import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) { //means true
        return <h1>Ooops that is not good...</h1>
    }
    return this.props.children // will return the children component put inside the errorBoundary if no error
  } 
}

export default ErrorBoundary;