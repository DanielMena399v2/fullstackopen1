import React, { useState } from 'react'

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {text: 'If it hurts, do it more often.', votes: 0},
    {text: 'Adding manpower to a late software project makes it later!', votes: 0},
    {text: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', votes: 0},
    {text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', votes: 0},
    {text: 'Premature optimization is the root of all evil.', votes: 0},
    {text: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', votes: 0},
    {text: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.', votes: 0},
    {text: 'The only way to go fast, is to go well.', votes: 0}
  ]);

  console.log(anecdotes);
   
  const [selected, setSelected] = useState(0);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const handleAnnecdoteClick = () => {
    const number = getRandomInt(anecdotes.length);
    setSelected(number);
    console.log(selected);
  };

  const handleVoteClick = () => {
    const copy = [...anecdotes];
    copy[selected].votes += 1;
    setAnecdotes(copy);
  }
  const mostVoted = anecdotes.reduce((prev, now) => (prev.votes > now.votes) ? prev : now);
  console.log("most voted: ", mostVoted);

  return (
    <div>
      <h1>Anecdote of the Day</h1>
      <p>"{anecdotes[selected].text}"</p>
      <p>This anecdote has {anecdotes[selected].votes} votes</p>
      <button onClick={handleVoteClick}>Vote</button>
      <button onClick={handleAnnecdoteClick}>Next Anecdote</button>
      <h1>Anecdote with the most votes</h1>
      {mostVoted.votes > 0 ? (
        <p>"{mostVoted.text}" has {mostVoted.votes} votes.</p>
      ): (
        <p>No votes have been placed.</p>
      )}
    </div>
  )
}

export default App