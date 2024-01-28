import React from "react";
import Link from "../Routes/Link";

const Navbar = () => {
    return (
        <nav>
            <p><Link href={'/assets'}>Assets</Link></p>
            <p><Link href={'/'}>HWH</Link></p>
            <p><Link href={'/chats'}>Chats</Link></p>
        </nav>
    )
}

export default Navbar;