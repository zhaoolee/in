import React from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link';
import headerscss from  './Header.module.scss';

function Header() {
    let posts =  [
        {
            href: "/",
            title: "首页",
        },
        {
            href: "/about",
            title: "关于"
        },
        {
            href: "/contact",
            title: "联系我们"
        }
    ];


    return (
        <div className={headerscss.header}>
            {posts.map((post) => (
                <div className={headerscss.acon} key={post.href}>
                    <Link href={post.href}>
                        <a>{post.title}</a>
                    </Link>

                </div>
            ))}
        </div>
    )
}






export default Header