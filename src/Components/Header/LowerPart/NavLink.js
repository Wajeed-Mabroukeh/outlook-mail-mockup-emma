
import './Navlink.css'
const Navlink = props => {
    return <a className={`navlink ${props.gray ? 'gray' :''}`} href='#'>
        <img src={props.src} />
        <p>{props.title}</p>
    </a>
}

export default Navlink