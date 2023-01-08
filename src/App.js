import './App.css';

const App = () => {
  const name = 'john';
  const isNameShowing = true;
  return (
    <div className="App">
      <h1>Hello, {isNameShowing ? name : 'someone'}!</h1>
    </div>
  );
}

export default App;
