import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './search-input.module.scss';
import classNames from "classnames";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

type Prop = {
    value: string;
    onChange: (newValue: string) => void;
    onSubmit: (value: string) => void;
    className?: string;
    smallIcon?: boolean;
}

export default function SearchInput({value, onChange, onSubmit, smallIcon, className}: Prop) {

    return (<form className={classNames(styles.box, styles.search, smallIcon && styles.smallIcon, className)} onSubmit={(evt) => {
            evt.preventDefault();
            onSubmit(value);
        }}>
            <div>
                <FontAwesomeIcon icon={faSearch} className={styles.icon}></FontAwesomeIcon>
            </div>
            <input type="search" placeholder="제목/작가/학교/태그로 검색" value={value} onChange={evt => onChange(evt.target.value)} />
        </form>);
}