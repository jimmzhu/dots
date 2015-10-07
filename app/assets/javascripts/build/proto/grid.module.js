'use strict';

var Zone = require('./zone');

var Grid = React.createClass({
  displayName: 'Grid',

  render: function render() {
    var _this = this;

    var zones = this.props.coordinates.map(function (coordinate) {
      return React.createElement(Zone, { key: coordinate.toString(),
        x: coordinate[0],
        y: coordinate[1],
        maxDimension: _this.state.maxDimension,
        translateCoordinates: _this.translateCoordinates });
    });

    return React.createElement(
      'div',
      { className: 'grid', style: this.getStyle() },
      zones
    );
  },

  getStyle: function getStyle() {
    return {
      position: this.props.position,
      border: '1px solid blue',
      width: '100%',
      height: '100%'
    };
  },

  propTypes: {
    coordinates: React.PropTypes.arrayOf(React.PropTypes.array).isRequired,
    position: React.PropTypes.oneOf(['relative', 'absolute']),
    scaleX: React.PropTypes.number,
    scaleY: React.PropTypes.number,
    padding: React.PropTypes.number
  },

  getDefaultProps: function getDefaultProps() {
    return {
      position: 'relative',
      scaleX: 1,
      scaleY: 1,
      padding: 1
    };
  },

  getInitialState: function getInitialState() {
    return {
      maxDimension: 960
    };
  },

  componentDidMount: function componentDidMount() {
    this.scaleToFit();
  },

  scaleToFit: function scaleToFit() {
    var elementWidth = $(React.findDOMNode(this)).width();
    var elementHeight = $(React.findDOMNode(this)).height();
    console.log([elementWidth, elementHeight]);

    this.setState({
      maxDimension: Math.min(elementWidth, elementHeight)
    });
  },

  translateCoordinates: function translateCoordinates(x, y) {
    return {
      top: this.yToTop(y),
      left: this.xToLeft(x)
    };
  },

  xToLeft: function xToLeft(x) {
    return this.state.maxDimension * this.props.scaleX * (x - this.getMin('x') + this.props.padding) / (this.getRange('x') + 2 * this.props.padding);
  },
  yToTop: function yToTop(y) {
    return this.state.maxDimension * this.props.scaleY * (this.getRange('y') + this.props.padding + this.getMin('y') - y) / (this.getRange('y') + 2 * this.props.padding);
  },

  axisTypeToIndex: function axisTypeToIndex(axisType) {
    switch (axisType.toLowerCase()) {
      case 'x':
        return 0;
      case 'y':
        return 1;
      default:
        throw new Error('invalid argument');
    }
  },
  getCoordinateValuesForAxis: function getCoordinateValuesForAxis(axisType) {
    var axisIndex = this.axisTypeToIndex(axisType);
    return this.props.coordinates.map(function (coordinate) {
      return coordinate[axisIndex];
    });
  },
  getMin: function getMin(axisType) {
    var coordinateValues = this.getCoordinateValuesForAxis(axisType);
    return Math.min.apply(Math, coordinateValues);
  },
  getMax: function getMax(axisType) {
    var coordinateValues = this.getCoordinateValuesForAxis(axisType);
    return Math.max.apply(Math, coordinateValues);
  },
  getRange: function getRange(axisType) {
    var coordinateValues = this.getCoordinateValuesForAxis(axisType);
    return Math.max.apply(Math, coordinateValues) - Math.min.apply(Math, coordinateValues);
  }
});

module.exports = Grid;