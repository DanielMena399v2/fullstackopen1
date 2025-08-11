import React from "react";

// const Hello = (props) => {
//     console.log(props)
//     return (
//       <div>
//         <p>
//           Hello {props.name}, you are {props.age} years old
//         </p>
//       </div>
//     )
//   }

//   const App = () => {
//     const name = 'Peter'
//     const age = 10

//     return (
//       <div>
//         <h1>Greetings</h1>
//         <Hello name='Maya' age={26 + 10} />
//         <Hello name={name} age={age} />
//       </div>
//     )
//   }

const Header = (props) => {
  console.log("header:", props);
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  );
};

const Part = (props) => {
  console.log("part: ", props);
  return (
    <div>
      <p>
        {props.part} {props.excercises}
      </p>
    </div>
  );
};

const Content = () => {
  return (
    <div>
      <Part part="Fundamentals of React" excercises="10" />
      <Part part="Using props to pass data" excercises="7" />
      <Part part="State of a component" excercises="14" />
    </div>
  );
};

const Total = (props) => {
  console.log("total: ", props);
  return (
    <div>
      <p>Number of excercises {props.total}</p>
    </div>
  );
};

const Course = (props) => {
  console.log("course: ", props);
  return (
    <div>
      <h1>{props.name}</h1>
      {props.parts.map((value) => (
        <p key={value.name}>
          {value.name} {value.exercises}
        </p>
      ))}
      <p>Number of excercises {props.total}</p>
    </div>
  );
};

const App = () => {
  //   const course = "Half Stack application development";
  //   const parts = [
  //     {
  //       name: "Fundamentals of React",
  //       exercises: 10,
  //     },
  //     {
  //       name: "Using props to pass data",
  //       exercises: 7,
  //     },
  //     {
  //       name: "State of a component",
  //       exercises: 14,
  //     },
  //   ];
  //   const part1 = {
  //     name: "Fundamentals of React",
  //     exercises: 10,
  //   };
  //   const part2 = {
  //     name: "Using props to pass data",
  //     exercises: 7,
  //   };
  //   const part3 = {
  //     name: "State of a component",
  //     exercises: 14,
  //   };
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };
  return (
    <div>
      {/* <Header name={course} />
      <Part part={parts[0].name} excercises={parts[0].exercises} />
      <Part part={parts[1].name} excercises={parts[1].exercises} />
      <Part part={parts[2].name} excercises={parts[2].exercises} />
      <Total total={10 + 7 + 14} /> */}
      <Course name={course.name} parts={course.parts} total={10+7+14}/>
    </div>
  );
};

export default App;


