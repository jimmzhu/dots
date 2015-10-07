CommentList = require('./comment_list')
CommentForm = require('./comment_form')

var CommentBox = React.createClass({displayName: "CommentBox",
  render: function() {
    return (
      React.createElement("div", {className: "commentBox"}, 
        React.createElement("h1", null, "Comments"), 
        React.createElement(CommentList, null), 
        React.createElement(CommentForm, null)
      )
    );
  }
});

module.exports = {
  CommentBox: CommentBox,
  CommentBoxElement: React.createElement(CommentBox, null)
}
