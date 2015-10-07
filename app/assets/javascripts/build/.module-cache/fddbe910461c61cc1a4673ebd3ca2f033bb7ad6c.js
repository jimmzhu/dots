var CommentForm = React.createClass({displayName: "CommentForm",
  render: function() {
    return (
      React.createElement("div", {className: "commentForm"}, 
        "I am a comment form dawg."
      )
    );
  }
});

CommentForm.element = function(params) {
  return React.createElement(CommentForm, null);
};
module.exports = CommentForm;
