var CommentBox = React.createClass({displayName: "CommentBox",
  render: function() {
    return (
      React.createElement("div", {className: "commentBox"}, 
        "Hello world! I am a CommentBox."
      )
    );
  }
});

var CommentBoxRenderer = function CommentBoxRenderer(parentNode) {
  this.parentNode = $(parentNode || '#content');
}

CommentBoxRenderer.prototype = {
  render: function() {
    React.render(
      React.createElement(CommentBox, null),
      $('#content')
    );
  }
}

module.exports = CommentBoxRenderer
