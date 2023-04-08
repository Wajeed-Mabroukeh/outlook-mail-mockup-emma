import './CircleProfileBox1.css';



function CircleProfileBox1({color,char}) {
    return (
    <nav className='circleProfileBox1' style={{backgroundColor: `${color}`}}>
     <p className='character'>{char}</p>
    </nav>
    )
  }
  
  export default CircleProfileBox1;