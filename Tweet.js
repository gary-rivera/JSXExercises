/**
 * takes: 
 * name
 * username
 * date
 * message
 */

function Tweet(props) {
  return <div className="tweet"> 
    <span> {props.name }</span>
    <span> {props.username }</span>
    <span> {props.date }</span>
    <p> {props.message }</p>
  </div>
}