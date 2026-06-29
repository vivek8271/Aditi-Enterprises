import logo from "../../../assets/images/logo/logo.png";

export default function Logo() {

    return (

        <a className="navbar-brand d-flex align-items-center" href="/">

            <img
                src={logo}
                alt="Aditi Enterprises"
                className="logo"
            />

            <span className="company-name">

                Aditi Enterprises

            </span>

        </a>

    );

}