"use strict";

var Box = React.createClass({
  displayName: "Box",

  render: function render() {
    return React.createElement(
      "div",
      { className: "grid", style: this.getStyle() },
      this.props.children
    );
  },
  getStyle: function getStyle() {
    return {
      float: 'left',
      width: this.props.width,
      height: this.props.height
    };
  }
});

module.exports = Box;