
import Navlink from "./NavLink"
import deleteIcon from '../../../assets/Icon-Arrow-down Copy 7.png'
import archive from '../../../assets/Icon-Arrow-down Copy 2.png'
import junk from '../../../assets/Icon-Arrow-down Copy.png'
import sweep from '../../../assets/Icon-Sweep.png'

import Combined from '../../../assets/Combined Shape-2.png'
import Categorize from '../../../assets/Combined Shape-1.png'
import clock from '../../../assets/Icon-Arrow-down Copy 5.png'
import reset from '../../../assets/Icon/UI/restart-1.png'






import './LinkList.css'
const LinkList = props => {
    return <nav>
        <ul>
            <li><Navlink src={deleteIcon} title='Delete' /></li>
            <li><Navlink src={archive} title='Archive' /></li>
            <li><Navlink src={junk} title='Junk' /></li>
            <li><Navlink src={sweep} title='Sweep' /></li>
            <li><Navlink src={Combined} title='Move to' /></li>
            <li><Navlink src={Categorize} title='Categorize' /></li>
            <li><Navlink src={clock} title='Categorize' /></li>
            <li><Navlink gray src={reset} title='Undo' /></li>

        </ul>
    </nav>
}

export default LinkList