import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Home() {
    return (
        <>
            <Header />

            <div>
                <Link href="/create">
                    <input type="button" value="학사일정" />
                </Link>
            </div>

            <div>
                <Link href="/schoolMeal">
                    <input type="button" value="급식조회" />
                </Link>
            </div>
            
            <Footer />
        </>
    );
}
