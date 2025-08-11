import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// let counter = 1;

const root = createRoot(document.getElementById('root'));
root.render(<App />);

// const refresh = () => {
//   root.render(
//     <App counter={counter} />
//   )
// }

// refresh()
// counter += 1
// refresh()
// counter += 1
// refresh()

// setInterval(() => {
//   refresh()
//   counter += 1
// }, 1000)