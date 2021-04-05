function First() {
  return <h1> My very first component</h1>
}

function NamedComponent(props) {
  return <p> My name is {props.name}</p>
}

function App() {
  return <div>
    <First />
    <NamedComponent name="whatever" />
  </div>
}