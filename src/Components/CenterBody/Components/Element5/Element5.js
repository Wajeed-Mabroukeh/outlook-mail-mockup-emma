import './Element5.css';

import CircleProfileBox5 from '../CircleProfileBox5/CircleProfileBox5';
import TitleBox from '../TitleBox/TitleBox';
import TextBox from '../TextBox/TextBox';
import TimeBox from '../TimeBox/TimeBox';

function Element5() {
    return (
    <nav className='box5'>
       <CircleProfileBox5/>
       <div>
       <TitleBox/>
       <TextBox/>
       <TimeBox/>
       </div>
     
    </nav>
    )
  }
  
  export default Element5;