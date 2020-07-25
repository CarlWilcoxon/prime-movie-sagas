import React from "react";
import Slide from "@material-ui/core/Slide";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const words = ["one", "two", "three"];
const transitionDuration = 500;

class TransitionCycle extends React.Component {
  state = {
    activeIndex: 0,
    elementIn: true
  };

  onClick = () => {
    this.setState({
      elementIn: false
    });
    setTimeout(() => {
      this.setState({
        elementIn: true,
        activeIndex: (this.state.activeIndex + 1) % words.length
      });
    }, transitionDuration);
  };

  render() {
    const { activeIndex, elementIn } = this.state;

    return (
      <div>
        <Button onClick={this.onClick}>Cycle</Button>
        <Slide
          in={this.state.elementIn}
          timeout={transitionDuration}
          direction="right"
        >
          <Typography variant="h1">{words[this.state.activeIndex]}</Typography>
        </Slide>
      </div>
    );
  }
}

export default TransitionCycle;
