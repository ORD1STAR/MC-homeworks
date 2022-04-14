import "./App.css"
function App(args) {
  return (
    <div className="App">
      <h2 align="center">{args.title}</h2>
      <p> {args.content}</p>
    </div>
  );
}

export default App;
