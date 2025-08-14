import React, { useState } from "react";

const StatisticLine = ({ stats }) => {
  return (
    <div>
    <table>
      <tbody>
        {stats.map((stat) => (
            <tr key={stat.text}>
                <td>{stat.text}</td>
                <td>{stat.text === "positive" ? `${stat.value}%` : stat.value}</td>
            </tr>
        ))}
      </tbody>
      </table>
    </div>
  );
};

const Statistics = (props) => {
  if (props.total === 0) {
    console.log("here");
    return <div>No feedback has been left for statistics to show.</div>;
  }

  const data = [
    { text: 'good', value: props.good },
    { text: 'neutral', value: props.neutral },
    { text: 'bad', value: props.bad },
    { text: 'total', value: props.total },
    { text: 'average', value: props.avg },
    { text: 'positive', value: props.posAvg }
  ];

  return (
    <div>
      <h1>Statistics</h1>
      <StatisticLine stats={data}/>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + neutral + bad;
  const avg = (good - bad) / total;
  const posAvg = good / total;

  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={handleGoodClick}>Good</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleBadClick}>Bad</button>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        avg={avg}
        posAvg={posAvg}
      />
    </div>
  );
};

export default App;
