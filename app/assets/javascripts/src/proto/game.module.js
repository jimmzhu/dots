var Box = require('./box');
// var Component = require('./component');
// var ComponentPool = require('./component_pool');
var Grid = require('./grid');

var Game = React.createClass({
  render() {
    return (
      <div className="game">
        <Box width="50%" height="94vh">
          <Grid coordinates={this.props.coordinates} scaleX={0.9} />
        </Box>
        <Box width="50%" height="47vh">
          <Grid coordinates={this.props.coordinates} scaleX={0.9} />
        </Box>
      </div>
    );
  },

  getDefaultProps() {
    return {
      coordinates: [
        [-6, 0],    [-6, 1],    [-6, 2],
                    [-6, -1],   [-6, -2],

        [-5, 0.5],  [-5, 1.5],  [-5, 2.5],  [-5, 3.5],
        [-5, -0.5], [-5, -1.5], [-5, -2.5], [-5, -3.5],

        [-4, 0],    [-4, 1],    [-4, 2],    [-4, 3],    [-4, 4],
                    [-4, -1],   [-4, -2],   [-4, -3],   [-4, -4],

        [-3, 0.5],  [-3, 1.5],  [-3, 2.5],  [-3, 3.5],  [-3, 4.5],
        [-3, -0.5], [-3, -1.5], [-3, -2.5], [-3, -3.5], [-3, -4.5],

        [-2, 0],    [-2, 1],    [-2, 2],    [-2, 3],    [-2, 4],    [-2, 5],
                    [-2, -1],   [-2, -2],   [-2, -3],   [-2, -4],   [-2, -5],

        [-1, 0.5],  [-1, 1.5],  [-1, 2.5],  [-1, 3.5],  [-1, 4.5],  [-1, 5.5],
        [-1, -0.5], [-1, -1.5], [-1, -2.5], [-1, -3.5], [-1, -4.5], [-1, -5.5],

        [0, 1],     [0, 2],     [0, 3],     [0, 4],     [0, 5],
        [0, -1],    [0, -2],    [0, -3],    [0, -4],    [0, -5],

        [1, 0.5],   [1, 1.5],   [1, 2.5],   [1, 3.5],   [1, 4.5],   [1, 5.5],
        [1, -0.5],  [1, -1.5],  [1, -2.5],  [1, -3.5],  [1, -4.5],  [1, -5.5],

        [2, 0],     [2, 1],     [2, 2],     [2, 3],     [2, 4],     [2, 5],
                    [2, -1],    [2, -2],    [2, -3],    [2, -4],    [2, -5],

        [3, 0.5],   [3, 1.5],   [3, 2.5],   [3, 3.5],   [3, 4.5],
        [3, -0.5],  [3, -1.5],  [3, -2.5],  [3, -3.5],  [3, -4.5],

        [4, 0],     [4, 1],     [4, 2],     [4, 3],     [4, 4],
                    [4, -1],    [4, -2],    [4, -3],    [4, -4],

        [5, 0.5],   [5, 1.5],   [5, 2.5],   [5, 3.5],
        [5, -0.5],  [5, -1.5],  [5, -2.5],  [5, -3.5],

        [6, 0],     [6, 1],     [6, 2],
                    [6, -1],    [6, -2]
      ]
    };
  },
});

module.exports = Game;
