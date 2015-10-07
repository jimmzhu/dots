'use strict';

var Zone = React.createClass({
  displayName: 'Zone',

  render: function render() {
    var contentOffsetStyle = {
      height: '1em',
      width: '1em',
      marginTop: '-0.5em',
      marginLeft: '-0.5em',
      textAlign: 'center'
    };
    return React.createElement(
      'div',
      { className: 'zone', style: this.getStyle() },
      React.createElement(
        'div',
        { className: 'zone-content', style: contentOffsetStyle },
        this.props.content
      )
    );
  },

  getStyle: function getStyle() {
    return {
      position: 'absolute',
      height: '0',
      width: '0'
    };
  },

  propTypes: {
    x: React.PropTypes.number.isRequired,
    y: React.PropTypes.number.isRequired,
    maxDimension: React.PropTypes.number.isRequired,
    translateCoordinates: React.PropTypes.func.isRequired
  },

  getDefaultProps: function getDefaultProps() {
    return {
      content: '•'
    };
  },

  componentWillUpdate: function componentWillUpdate(nextProps, nextState) {
    var topLeft = this.props.translateCoordinates(this.props.x, this.props.y);
    $(React.findDOMNode(this)).css(topLeft);
  }

});

module.exports = Zone;