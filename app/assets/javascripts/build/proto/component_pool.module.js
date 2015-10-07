"use strict";

var ComponentPool = React.createClass({
  displayName: "ComponentPool",

  render: function render() {
    return React.createElement(
      "div",
      { className: "component-pool" },
      React.createElement("span", { className: "fa fa-plus" })
    );
  }
});