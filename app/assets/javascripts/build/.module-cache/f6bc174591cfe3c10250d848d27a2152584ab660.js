var CommentList = require('./comment_list')
var CommentForm = require('./comment_form')

var CommentBox = React.createClass({displayName: "CommentBox",
  render: function() {
    return (
      React.createElement("div", {className: "commentBox"}, 
        React.createElement("h1", null, "Comments"), 
        React.createElement(CommentList, {data: this.props.data}), 
        React.createElement(CommentForm, null)
      )
    );
  }
});

CommentBox.element = React.createElement(CommentBox, null)
module.exports = CommentBox;
