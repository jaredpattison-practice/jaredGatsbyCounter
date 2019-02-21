import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  handleButtonClick = e => {
    e.preventDefault();
    this.setState({ counter: this.state.counter + 1 });
  };

  handleButtonClick2 = e => {
    e.preventDefault();
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    let color = this.state.counter >= 0 ? "green" : "red";
    return (
      <div>
        <h4 className={color}>{this.state.counter}</h4>
        <form>
          <input
            type="button"
            value="Click Me"
            onClick={this.handleButtonClick}
          />
          <input
            type="button"
            value="No, Click Me"
            onClick={this.handleButtonClick2}
          />
        </form>
      </div>
    );
  }
}

export default Counter;
