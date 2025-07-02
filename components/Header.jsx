import Link from "next/link";
import style from "./Header.module.css";

const Header = () => {
    return(
        <header className="d-flex justify-content-center py-lg-5 py-4">
            <Link className={style['logo-hover']} href="/"><img width="200" height="auto" src="/logo.png" alt="" /></Link>
        </header>
    )
}

export default Header;