const Zone = require('./zone');

const Grid = React.createClass({
  render() {
    const zones = this.props.coordinates.map(coordinate => {
      return <Zone key={coordinate.toString()}
                   x={coordinate[0]}
                   y={coordinate[1]}
                   maxDimension={this.state.maxDimension}
                   translateCoordinates={this.translateCoordinates} />;
    });

    return (
      <div className="grid" style={this.getStyle()}>
        {zones}
      </div>
    );
  },

  getStyle() {
    return {
      position: this.props.position,
      border: '1px solid blue',
      width: '100%',
      height: '100%',
    }
  },

  propTypes: {
    coordinates: React.PropTypes.arrayOf(React.PropTypes.array).isRequired,
    position: React.PropTypes.oneOf(['relative', 'absolute']),
    scaleX: React.PropTypes.number,
    scaleY: React.PropTypes.number,
    padding: React.PropTypes.number,
  },

  getDefaultProps() {
    return {
      position: 'relative',
      scaleX: 1,
      scaleY: 1,
      padding: 1,
    }
  },

  getInitialState() {
    return {
      maxDimension: 960,
    }
  },

  componentDidMount() {
    this.scaleToFit();
  },

  scaleToFit() {
    const elementWidth = $(React.findDOMNode(this)).width();
    const elementHeight = $(React.findDOMNode(this)).height();
    console.log([elementWidth, elementHeight]);

    this.setState({
      maxDimension: Math.min(elementWidth, elementHeight)
    });
  },

  translateCoordinates(x, y) {
    return {
      top: this.yToTop(y),
      left: this.xToLeft(x),
    }
  },

  xToLeft(x) {
    return this.state.maxDimension * this.props.scaleX *
           (x - this.getMin('x') + this.props.padding) /
           (this.getRange('x') + 2*this.props.padding);
  },
  yToTop(y) {
    return this.state.maxDimension * this.props.scaleY *
           (this.getRange('y') + this.props.padding + this.getMin('y') - y) /
           (this.getRange('y') + 2*this.props.padding);
  },

  axisTypeToIndex(axisType) {
    switch (axisType.toLowerCase()) {
      case 'x':
        return 0;
      case 'y':
        return 1;
      default:
        throw new Error('invalid argument');
    }
  },
  getCoordinateValuesForAxis(axisType) {
    const axisIndex = this.axisTypeToIndex(axisType);
    return this.props.coordinates.map(coordinate => coordinate[axisIndex]);
  },
  getMin(axisType) {
    const coordinateValues = this.getCoordinateValuesForAxis(axisType);
    return Math.min.apply(Math, coordinateValues);
  },
  getMax(axisType) {
    const coordinateValues = this.getCoordinateValuesForAxis(axisType);
    return Math.max.apply(Math, coordinateValues);
  },
  getRange(axisType) {
    const coordinateValues = this.getCoordinateValuesForAxis(axisType);
    return Math.max.apply(Math, coordinateValues) -
           Math.min.apply(Math, coordinateValues);
  },
});

module.exports = Grid;
