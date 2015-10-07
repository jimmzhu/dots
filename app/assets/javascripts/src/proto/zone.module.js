const Zone = React.createClass({
  render() {
    const contentOffsetStyle = {
      height: '1em',
      width: '1em',
      marginTop: '-0.5em',
      marginLeft: '-0.5em',
      textAlign: 'center',
    }
    return (
      <div className="zone" style={this.getStyle()}>
        <div className="zone-content" style={contentOffsetStyle}>
          {this.props.content}
        </div>
      </div>
    );
  },

  getStyle() {
    return {
      position: 'absolute',
      height: '0',
      width: '0',
    }
  },

  propTypes: {
    x: React.PropTypes.number.isRequired,
    y: React.PropTypes.number.isRequired,
    maxDimension: React.PropTypes.number.isRequired,
    translateCoordinates: React.PropTypes.func.isRequired,
  },

  getDefaultProps() {
    return {
      content: '•',
    }
  },

  componentWillUpdate(nextProps, nextState) {
    const topLeft = this.props.translateCoordinates(this.props.x, this.props.y);
    $(React.findDOMNode(this)).css(topLeft);
  },

});

module.exports = Zone;
