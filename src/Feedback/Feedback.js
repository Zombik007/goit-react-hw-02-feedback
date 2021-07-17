import React, { Component } from 'react';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedbackGod = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  feedbackNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  feedbackBad = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, bad } = this.state;
    const total = (good / (bad + good)) * 100;
    return Math.round(total);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <h2>Please leave feedback</h2>
        <div>
          <button onClick={this.feedbackGod}>Good</button>
          <button onClick={this.feedbackNeutral}>Neutral</button>
          <button onClick={this.feedbackBad}>Bad</button>
        </div>
        <h2>Statistics</h2>
        {/* <p>No feedback given</p> */}
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {this.countTotalFeedback()}</p>
        <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
      </div>
    );
  }
}

export default Feedback;
