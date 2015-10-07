var CommentBox = React.createClass({displayName: "CommentBox",
  render: function() {
    return (
      React.createElement("div", {className: "commentBox"}, 
        "Hello world! I am a CommentBox."
      )
    );
  }
});

var CommentBoxRenderer = function(parentNode) {
  this.parentNode = $(parentNode || '#content');
}

CommentBoxRenderer.prototype = {
  render: function() {
    React.render(
      React.createElement(CommentBox, null),
      this.parentNode
    );
  }
}

module.exports = CommentBoxRenderer
