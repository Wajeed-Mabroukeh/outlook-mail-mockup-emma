
import shape from '../../../assets/Shape.png'
import './SearchBar.css'
const SearchBar = props =>{
    return <div className="search-bar">
        <button className=''><img src={shape} /></button>
        <input type={'search'} placeholder='Search' />
    </div>
}

export default SearchBar