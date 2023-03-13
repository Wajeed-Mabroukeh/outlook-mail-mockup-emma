import './Top_CenterBody.css';

import Circle_Top_CenterBody from '../Circle_Top_CenterBody/Circle_Top_CenterBody';
import Label_Top_CenterBody from '../Label_Top_CenterBody/Label_Top_CenterBody';
import Star_Top_CenterBody from '../Star_Top_CenterBody/Star_Top_CenterBody';
import Text_Top_CenterBody from '../Text_Top_CenterBody/Text_Top_CenterBody';
import Arrow_Top_CenterBody from '../Arrow_Top_CenterBody/Arrow_Top_CenterBody';

function Top_CenterBody() {
    return (
      <nav className='Top_CenterBody'>
      <Circle_Top_CenterBody/>
      <Label_Top_CenterBody/>
      <Star_Top_CenterBody/>
      <Text_Top_CenterBody/>
      <Arrow_Top_CenterBody/>
   </nav>
    );
  }
  
  export default Top_CenterBody;