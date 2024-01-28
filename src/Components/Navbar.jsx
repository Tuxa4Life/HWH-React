import React from "react";
import Link from "../Routes/Link";

const Navbar = () => {
    return (
        <nav>
            <p><Link href={'/assets'}>Assets</Link></p>
            <p><Link href={'/'}>HWH</Link></p>
            <p><Link href={'/chats'}>Chats</Link></p>

            <i style={{position: 'absolute', top: '38%', right: '50px', fontSize: '25px', cursor: 'pointer'}} class="user circle outline icon"></i>
        </nav>
    )
}

export default Navbar;