const Box = React.createClass({
  render() {
    return (
      <div className="grid" style={this.getStyle()}>
        {this.props.children}
      </div>
    );
  },
  getStyle() {
    return {
      float: 'left',
      width: this.props.width,
      height: this.props.height,
    };
  },
});

module.exports = Box;
