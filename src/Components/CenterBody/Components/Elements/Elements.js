
import "./Elements.css"
import CircleProfileBox1 from '../CircleProfileBox1/CircleProfileBox1';
import TitleBox from '../TitleBox/TitleBox';
import TextBox from '../TextBox/TextBox';
import TimeBox from '../TimeBox/TimeBox';


function Elements1(props) {
    console.log(props);
    return (
    <nav className='box1'>
       <CircleProfileBox1 {...props}/>
       <div>
       <TitleBox {...props}/>
       <TextBox {...props}/>
       <TimeBox {...props}/>
       </div>
    </nav>
    )
  }
  
  export default Elements1;