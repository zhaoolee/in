import React from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link';
import headerscss from  './Header.module.scss';


function Header(props) {
    console.log("props==>>", props);
    let posts =  [
        {
            href: "/",
            title: "首页",
            title_key:"index"
        },
        {
            href: "/about.html",
            title: "关于",
            title_key: "about"
        },
        {
            href: "/contact.html",
            title: "联系我们",
            title_key: "contact"
        }
    ];


    return (
        <div className={headerscss.header}>
            {posts.map((post) => (
                <div className={headerscss.a_container} key={post.href}>
                    {props.title_key === post.title_key && <Link href={post.href}>
                         <a className={headerscss.a_title_hover}>{post.title}</a>
                    </Link>}

                    {props.title_key !== post.title_key && <Link href={post.href}>
                         <a className={headerscss.a_title}>{post.title}</a>
                    </Link>}
                </div>
            ))}
        </div>
    )
}






export default Header