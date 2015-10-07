var Comment = React.createClass({displayName: "Comment",
  render: function() {
    return (
      React.createElement("div", {className: "comment"}, 
        React.createElement("h2", {className: "commentAuthor"}, 
          this.props.author
        ), 
        "Hello, world! I am a Comment. Yeah."
      )
    );
  }
});

Comment.element = React.createElement(Comment, null)
module.exports = Comment;
