import './TitleBox.css';


function TitleBox({title}) {
    return (
    <nav className='titleBox'>
     <p>{title}</p>
    </nav>
    )
  }
  
  export default TitleBox;