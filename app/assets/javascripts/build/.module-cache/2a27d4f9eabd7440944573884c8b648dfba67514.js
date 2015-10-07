var CommentList = React.createClass({displayName: "CommentList",
  render: function() {
    return (
      React.createElement("div", {className: "commentList"}, 
        "Hello, world! I am a CommentList. Yeah."
      )
    );
  }
});

function CommentListRenderer(parentNode) {
  this.parentNode = $(parentNode)[0];
}

CommentListRenderer.prototype = {
  render: function() {
    React.render(
      React.createElement(CommentBox, null),
      this.parentNode
    );
  }
};

module.exports = CommentListRenderer;
