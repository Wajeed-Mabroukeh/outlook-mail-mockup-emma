import './Element6.css';

import CircleProfileBox6 from '../CircleProfileBox6/CircleProfileBox6';
import TitleBox from '../TitleBox/TitleBox';
import TextBox from '../TextBox/TextBox';
import TimeBox from '../TimeBox/TimeBox';

function Element6() {
    return (
    <nav className='box6'>
       <CircleProfileBox6/>
       <div>
       <TitleBox/>
       <TextBox/>
       <TimeBox/>
       </div>
     
    </nav>
    )
  }
  
  export default Element6;