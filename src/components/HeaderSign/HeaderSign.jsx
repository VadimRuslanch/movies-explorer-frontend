import { Link } from "react-router-dom";

export default function HeaderSign({headerTitle}) {
    return (
        <div className="header-sign">
            <Link className="header-sign__logo-img" to="/" />
            <h3 className="header-sign__title" >{headerTitle}</h3>
        </div>
    );
};