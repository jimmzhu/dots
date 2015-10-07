var CommentList = require('./comment_list');
var CommentForm = require('./comment_form');

var CommentBox = React.createClass({displayName: "CommentBox",
  getInitialState: function() {
    return {data: []};
  },

  componentDidMount: function() {
    return {data: []};
  },

  render: function() {
    return (
      React.createElement("div", {className: "commentBox"}, 
        React.createElement("h1", null, "Comments"), 
        React.createElement(CommentList, {data: this.state.data}), 
        React.createElement(CommentForm, null)
      )
    );
  }
});

CommentBox.element = function(params) {
  return React.createElement(CommentBox, {data: params.data, url: params.url});
};
module.exports = CommentBox;
