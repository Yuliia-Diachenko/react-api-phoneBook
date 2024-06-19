import css from "./SearchBox.module.css";
import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  changeFilter } from "../../redux/filters/slice";
import { selectNameFilter, selectNumberFilter  } from "../../redux/filters/selectors";
function SearchBox() {
    const dispatch = useDispatch();
    const contactId = useId;

    const name = useSelector(selectNameFilter);
    const number = useSelector(selectNumberFilter);

    const handleFilter = (e) => {
        const value = e.target.value;
        dispatch(changeFilter(
            {name: value.toLowerCase(),
            number: value,}
        ));
    };

    return (
        <form className={css.form}>
            <label >Find contacts by name</label>
            <input id={`${contactId}-name`} type="text"   value={name || number} onChange={handleFilter}/>
        </form>
    )
}
export default SearchBox;