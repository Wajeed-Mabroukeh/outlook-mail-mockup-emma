import './TimeBox.css';


function TimeBox({time}) {
    return (
    <nav className='timeBox'>
      <p>{time}</p>
    </nav>
    )
  }
  
  export default TimeBox;