var CommentForm = React.createClass({displayName: "CommentForm",
  render: function() {
    return (
      React.createElement("form", {className: "commentForm", onSubmit: this.handleSubmit}, 
        React.createElement("input", {type: "text", ref: "author", placeholder: "Your name"}), 
        React.createElement("input", {type: "text", ref: "text", size: "42", 
               placeholder: "Say something... (I'm giving up on you)"}), 
        React.createElement("input", {type: "submit", value: "Post"})
      )
    );
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var author = React.findDOMNode(this.refs.author).value.trim();
    var text = React.findDOMNode(this.refs.text).value.trim();
    if (!text || !author) {
      return;
    }
    this.props.onCommentSubmit({author: author, text: text});
    React.findDOMNode(this.refs.author).value = '';
    React.findDOMNode(this.refs.text).value = '';
  }
});

CommentForm.element = function(params) {
  return React.createElement(CommentForm, null);
};
module.exports = CommentForm;
