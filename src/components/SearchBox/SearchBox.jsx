import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter, changeFilter} from "../../redux/filters/slice";

function SearchBox() {
    const dispatch = useDispatch();
    const filter = useSelector(selectNameFilter);

    const handleFilter = (e) => {
        const name = e.target.value;
        dispatch(changeFilter(name));
    };

    return (
        <form className={css.form}>
            <label >Find contacts by name</label>
            <input type="text"  value={filter} onChange={handleFilter}/>
        </form>
    )
}
export default SearchBox;