var CommentBox = React.createClass({displayName: "CommentBox",
  render: function() {
    return (
      React.createElement("div", {className: "commentBox"}, 
        "Hello world! I am a CommentBox. Man."
      )
    );
  }
});

module.exports = React.createElement(CommentBox, null);
