var Comment = require('./comment');

var CommentList = React.createClass({displayName: "CommentList",
  render: function() {
    return (
      React.createElement("div", {className: "commentList"}, 
        React.createElement(Comment, {author: "Pete Hunt"}, "I am the mighty Pete"), 
        React.createElement(Comment, {author: "Jordan Walke"}, "I am *mightier* than the mighty Pete")
      )
    );
  }
});

CommentList.element = React.createElement(CommentList, null)
module.exports = CommentList;
