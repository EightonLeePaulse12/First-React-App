import "./App.css";

const Person = () => {
  return (
    <>
      <h1>Name: tara</h1>
      <h1>Surname: Snell</h1>
      <h1>Age: 28</h1>
    </>
  );
};

const App = () => {
  const names = ["Jadee", "Ethan", "tara"];
  const name = Math.floor(Math.random() * names.length);

  const nameShowing = true;
  return (
    <div className="App">
      {nameShowing ? (
        <>
          <h1>Hello {names[name]}</h1>
          <h2>Welcome to my first React App</h2>
          <Person />
          <Person/>
          <Person/>
          <Person/>
          <Person/>
          <Person/>
        </>
      ) : (
        <>
          <h1>Hello person</h1>
          <h2>Who are you?</h2>
        </>
      )}
    </div>
  );
};

export default App;
