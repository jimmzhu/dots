var Comment = require('./comment');

var CommentList = React.createClass({displayName: "CommentList",
  render: function() {
    return (
      React.createElement("div", {className: "commentList"}, 
        "this.props.data.map(function (comment) ", 
          React.createElement(Comment, {author: comment.author}, 
            comment.text
          ), 
        ");"
      )
    );
  }
});

CommentList.element = React.createElement(CommentList, null)
module.exports = CommentList;
