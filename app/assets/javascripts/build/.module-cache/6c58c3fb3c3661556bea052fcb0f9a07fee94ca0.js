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
  handleCommentSubmit: function(e) {
    e.preventDefault();
    var author = React.findDOMNode(this.refs.author).value.trim();
    var text = React.findDOMNode(this.refs.text).value.trim();
    if (!text || !author) {
      return;
    }
    // TODO: send request to the server
    React.findDOMNode(this.refs.author).value = '';
    React.findDOMNode(this.refs.text).value = '';
  }
});

CommentForm.element = function(params) {
  return React.createElement(CommentForm, null);
};
module.exports = CommentForm;
