




import './LinkList.css'
   
import {links} from './links'
import Navlink from './NavLink'
const LinkList = props => {

    return <nav>
        <ul>
        {links.map((item, index) => <li><Navlink src={item.icon} title={item.title} gray={item.gray} /></li>)}
        </ul>
    </nav>
}

export default LinkList