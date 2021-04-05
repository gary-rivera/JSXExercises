function Person(props) {
  /**
   * Props:
   *  - name
   *  - age 
   *  - hobbies (arr)
   */
  let { name, age, hobbies } = props
  let text = +age >= 18 ? "Please go vote!" : "You must be 18" 

  return (
    <div>
      <p> Learn some information about this person: </p>
        <ul> 
          <li> { name } </li>
          <li> { age } <h1> { text }</h1></li>
          { hobbies.map(hobby => <li> { hobby } </li>) }
        </ul>
    </div>
  )
}