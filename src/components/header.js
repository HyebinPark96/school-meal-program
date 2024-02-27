import Link from "next/link";

export default function Header() {
    return (
        <div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <a
                    href="/"
                    className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
                >
                    <svg
                        className="bi me-2"
                        width="40"
                        height="32"
                        role="img"
                        aria-label="Bootstrap"
                    >
                        {/* <use xlink:href="#bootstrap"></use> */}
                    </svg>
                </a>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li>
                        <a href="#" className="nav-link px-2 link-secondary">
                            홈
                        </a>
                    </li>
                    <li>
                        <Link
                            href="/create"
                            className="nav-link px-2 link-dark"
                        >
                            학사일정
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/schoolMeal"
                            className="nav-link px-2 link-dark"
                        >
                            급식조회
                        </Link>
                    </li>
                    <li>
                        <a href="#" className="nav-link px-2 link-dark">
                            FAQs
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link px-2 link-dark">
                            About
                        </a>
                    </li>
                </ul>

                <div className="col-md-3 text-end">
                    <button
                        type="button"
                        className="btn btn-outline-primary me-2"
                    >
                        Login
                    </button>
                    <button type="button" className="btn btn-primary">
                        Sign-up
                    </button>
                </div>
            </header>
        </div>
    );
}
