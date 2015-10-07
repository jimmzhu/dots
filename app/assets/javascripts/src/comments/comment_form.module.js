var CommentForm = React.createClass({
  render: function() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input type="text" ref="author" placeholder="Your name" />
        <input type="text" ref="text" size="42"
               placeholder="Say something... (I'm giving up on you)" />
        <input type="submit" value="Post" />
      </form>
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
  return <CommentForm />;
};
module.exports = CommentForm;
