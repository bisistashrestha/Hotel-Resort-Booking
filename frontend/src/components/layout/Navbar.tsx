import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-full bg-[#B29552]">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
                <Link href="/" className="text-4xl font-serif text-[#F6F1E8]">
                Yama Kaze
                </Link>

                <ul className="flex items-center gap-10 text-white">
                    <li><Link href="/" className="transition hover:text-gray-200">Home</Link></li>
                    <li><Link href="/rooms" className="transition hover:text-gray-200">Rooms</Link></li>
                    <li><Link href="/experiences" className="transition hover:text-gray-200">Experiences</Link></li>
                    <li><Link href="/offers" className="transition hover:text-gray-200">Offers</Link></li>
                </ul>

                <button className="border border-white px-6 py-3 text-white transition hover:bg-white hover:text-[#AD8B3A]">
                Book Now
                </button>
            </div>
        </nav>
    );
}