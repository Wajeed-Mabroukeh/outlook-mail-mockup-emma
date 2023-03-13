import './Element2.css';

import CircleProfileBox2 from '../CircleProfileBox2/CircleProfileBox2';
import TitleBox from '../TitleBox/TitleBox';
import TextBox from '../TextBox/TextBox';
import TimeBox from '../TimeBox/TimeBox';

function Element2() {
    return (
    <nav className='box2'>
       <CircleProfileBox2/>
       <div>
       <TitleBox/>
       <TextBox/>
       <TimeBox/>
       </div>
     
    </nav>
    )
  }
  
  export default Element2;