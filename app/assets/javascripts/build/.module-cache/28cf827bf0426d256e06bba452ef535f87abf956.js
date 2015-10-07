var CommentBox = React.createClass({displayName: "CommentBox",
  render: function() {
    return (
      React.createElement("div", {className: "commentBox"}, 
        "Hello world! I am a CommentBox."
      )
    );
  }
});

var CommentBoxRenderer = (function() {
  function CommentBoxRenderer(parentNode) {
    this.parentNode = $(parentNode || '#content');
  }

  return CommentBoxRenderer
})();

module.exports.render = function() {
  React.render(
    React.createElement(CommentBox, null),
    $('#content')
  );
}
