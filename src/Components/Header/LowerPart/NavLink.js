
import './Navlink.css'
const Navlink = props => {
    return <div className={`navlink ${props.gray ? 'gray' :''}`}>
        <img src={props.src} />
        <p>{props.title}</p>
    </div>
}

export default Navlink