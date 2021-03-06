"use strict";

var converter = new Showdown.converter();

var Comment = React.createClass({
  displayName: "Comment",

  render: function render() {
    var rawMarkup = converter.makeHtml(this.props.children.toString());
    return React.createElement(
      "div",
      { className: "comment" },
      React.createElement(
        "h2",
        { className: "commentAuthor" },
        this.props.author
      ),
      React.createElement("span", { dangerouslySetInnerHTML: { __html: rawMarkup } })
    );
  }
});

Comment.element = function (params) {
  return React.createElement(Comment, null);
};
module.exports = Comment;