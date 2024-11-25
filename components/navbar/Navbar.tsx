import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50 text-white p-0 border-b border-gray-200">
            <div>
                <p className='bg-[#006340] text-[#f0cba1] text-white text-center p-2 text-xs font-bold'>SHARE YOUR PROJECT AND TAG US TO RECEIVE A 10% OFF COUPON FOR YOUR NEXT PURCHASE!</p>
                {/* #c52a38 */}
            </div> 
            <div className="bg-black py-2 px-6"> 
                <ul className="flex space-x-6 text-sm">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/">Leather Classes</Link>
                    </li>
                    <li>
                        <Link href="/">About Us</Link>
                    </li>
                    <li>
                        <Link href="/">Contact</Link>
                    </li>


                </ul>
            </div>

        </nav>
    );
}