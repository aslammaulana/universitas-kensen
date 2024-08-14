import Link from "next/link";

const Header = () => (
    <header>
        <div className="logo">
            <Link href="/users">KensenUniv</Link>
        </div>
        <div className="header-items">
            <div className="header-item">
                <Link href="/about">About</Link>
            </div>
            <div className="header-item">
                <Link href="/contact">Contact</Link>
            </div>
            <div className="header-item">
                <Link href="/users">Other</Link>
            </div>
        </div>
    </header>
);

export default Header;