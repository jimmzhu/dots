var CommentBox = React.createClass({displayName: "CommentBox",
  render: function() {
    return (
      React.createElement("div", {className: "commentBox"}, 
        "Hello world! I am a CommentBox."
      )
    );
  }
});

function CommentBoxRenderer(parentNode) {
  this.parentNode = $(parentNode || '#content')[0];
}

CommentBoxRenderer.prototype = {
  render: function() {
    React.render(
      React.createElement(CommentBox, null),
      this.parentNode
    );
  }
};

module.exports = React.createElement(CommentBox, null);
