import ControlMenu from "./ControlMenu"
import NewMassageButton from "./NewMassageButton"
import LinkList from "./LinkList"
import More from "./More"
import './LowerPart.css'
const LowerPart = props =>{
    return <div className="lower-part">
        <ControlMenu />
        <NewMassageButton />
        <LinkList />
        <More />
        
    </div>
}

export default LowerPart