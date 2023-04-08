import ControlButton from "./ControlButton"
import SearchBar from "./SearchBar"
import Navigation from "./Navigation"
import './HigherPart.css'
const HigherPart = props => {
    return <div className="higher-part">
        <ControlButton/>
        <SearchBar />
        <Navigation/>
    </div>
}


export default HigherPart