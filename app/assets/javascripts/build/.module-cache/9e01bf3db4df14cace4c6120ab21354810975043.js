var CommentList = React.createClass({displayName: "CommentList",
  render: function() {
    return (
      React.createElement("div", {className: "commentList"}, 
        "Hello, world! I am a CommentList. Yeah."
      )
    );
  }
});

module.exports = React.createElement(CommentList, null);
