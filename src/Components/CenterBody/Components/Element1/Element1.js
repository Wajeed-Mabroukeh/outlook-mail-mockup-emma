import './Element1.css';

import CircleProfileBox1 from '../CircleProfileBox1/CircleProfileBox1';
import TitleBox from '../TitleBox/TitleBox';
import TextBox from '../TextBox/TextBox';
import TimeBox from '../TimeBox/TimeBox';

function Element1() {
    return (
    <nav className='box1'>
       <CircleProfileBox1/>
       <div>
       <TitleBox/>
       <TextBox/>
       <TimeBox/>
       </div>
    </nav>
    )
  }
  
  export default Element1;