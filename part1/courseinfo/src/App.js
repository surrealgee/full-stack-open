function Header({ course }) {
  return (
    <>
      <h1>{course}</h1>
    </>
  );
}

function Content({ content }) {
  const { part1, part2, part3, exercises1, exercises2, exercises3 } = content;
  return (
    <>
      <Part part={part1} exercise={exercises1} />
      <Part part={part2} exercise={exercises2} />
      <Part part={part3} exercise={exercises3} />
    </>
  );
}

function Part({ part, exercise }) {
  return (
    <>
      <p>
        {part} {exercise}
      </p>
    </>
  );
}

function Total({ exercises }) {
  const { exercises1, exercises2, exercises3 } = exercises;
  return (
    <>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </>
  );
}

function App() {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content
        content={{ part1, part2, part3, exercises1, exercises2, exercises3 }}
      />
      <Total exercises={{ exercises1, exercises2, exercises3 }} />
    </div>
  );
}

export default App;
