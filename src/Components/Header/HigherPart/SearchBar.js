
import shape from '../../../assets/Shape.png'
import './SearchBar.css'
const SearchBar = props =>{
    return <div className="search-bar">
        <a href='#' className=''><img src={shape} /></a>
        <input type={'search'} placeholder='Search' />
    </div>
}


export default SearchBar