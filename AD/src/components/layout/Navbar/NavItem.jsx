export default function NavItem({

    href,

    title,

    active,

    onClick

}) {

    return (

        <li className="nav-item">

            <a

                href={href}

                className={`nav-link ${active ? "active" : ""}`}

                onClick={onClick}

            >

                {title}

            </a>

        </li>

    );

}