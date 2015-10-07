'use strict';

var CommentList = require('./comment_list');
var CommentForm = require('./comment_form');

var CommentBox = React.createClass({
  displayName: 'CommentBox',

  render: function render() {
    return React.createElement(
      'div',
      { className: 'commentBox' },
      React.createElement(
        'h1',
        null,
        'Comments'
      ),
      React.createElement(CommentForm, { onCommentSubmit: this.handleCommentSubmit }),
      React.createElement(CommentList, { data: this.state.data })
    );
  },
  getInitialState: function getInitialState() {
    return { data: [] };
  },
  componentDidMount: function componentDidMount() {
    this.loadCommentsFromServer();
    this.interval = setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  componentWillUnmount: function componentWillUnmount() {
    clearInterval(this.interval);
  },
  loadCommentsFromServer: function loadCommentsFromServer() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: (function (data) {
        this.setState({ data: data });
      }).bind(this),
      error: (function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }).bind(this)
    });
  },
  handleCommentSubmit: function handleCommentSubmit(comment) {
    var comments = this.state.data;
    var newComments = [comment].concat(comments);
    this.setState({ data: newComments });
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: { comment: comment },
      success: (function (data) {
        this.setState({ data: data });
      }).bind(this),
      error: (function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }).bind(this)
    });
  }
});
CommentBox.element = function (params) {
  return React.createElement(CommentBox, { url: params.url, pollInterval: params.pollInterval });
};
module.exports = CommentBox;