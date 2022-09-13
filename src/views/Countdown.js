import React, { useState, useEffect } from "react";
class CountDown extends React.Component {
  state = {
    count: 10,
  };
  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
  componentDidMount() {
    // setTimeout(() => {
    //   console.log("meeeeeeeeee");
    // }, 2000);
    this.timer = setInterval(() => {
      this.setState({
        count: this.state.count - 1,
      });
    }, 1000);
  }
  componentDidUpdate(prevProps, PrevState) {
    if (prevProps.count !== this.state.count && this.state.count === 0) {
      if (this.timer) {
        clearInterval(this.timer);
        // this.props.onTimesup();
      }
    }
  }
  render() {
    return <div>{this.state.count} class</div>;
  }
}
const NewCountDown = (props) => {
  const [count, setCount] = useState(10);
  useEffect(() => {
    if (count === 0) {
      props.onTimesup();
      return;
    }
    let timer = setInterval(() => {
      console.log("run ");
      setCount(count - 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [count]);
  return <div>{count} hooks</div>;
};
export { NewCountDown, CountDown };