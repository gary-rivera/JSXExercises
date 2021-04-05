function App2() { 
  return (
  <div>
    <Tweet
      name="name1"
      username="name_1"
      date={new Date().toDateString()}
      message="hi"
      />
    <Tweet
      name="name2"
      username="name_2"
      date={new Date().toDateString()}
      message="hello"
      />
    <Tweet
      name="name3"
      username="name_3"
      date={new Date().toDateString()}
      message="hey"
      />
  </div>
  )
}