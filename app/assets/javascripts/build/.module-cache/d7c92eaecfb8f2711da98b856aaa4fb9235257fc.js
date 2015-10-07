var CommentForm = React.createClass({displayName: "CommentForm",
  render: function() {
    return (
      React.createElement("form", {className: "commentForm", onSubmit: this.props.onCommentSubmit}, 
        React.createElement("input", {type: "text", ref: "author", placeholder: "Your name"}), 
        React.createElement("input", {type: "text", ref: "text", 
               placeholder: "Say something... (I'm giving up on you)"}), 
        React.createElement("input", {type: "submit", value: "Post"})
      )
    );
  },
});

CommentForm.element = function(params) {
  return React.createElement(CommentForm, null);
};
module.exports = CommentForm;
