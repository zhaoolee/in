import React from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link';
import headerscss from './Header.module.scss';
import Image from 'next/image'

function Header(props) {
    console.log("props==>>", props);
    let posts = [
        {
            href: "/index.html",
            title: "首 页",
            title_key: "index"
        },
        {
            href: "/subscribe.html",
            title: "订 阅",
            title_key: "subscribe"
        },
        {
            href: "/about.html",
            title: "关 于",
            title_key: "about"
        },
        {
            href: "/contact.html",
            title: "你 的",
            title_key: "contact"
        }
    ];


    return (
        <div className={headerscss.header}>

            <div className={headerscss.header_container}>
                <div className={headerscss.logo_container}>
                    <Link href={"/index.html"}>
                        <a>
                            <Image
                                src="/in/fangyuan.png"
                                alt="fangyuan"
                                width={"auto"}
                                height={40}
                            />
                        </a>
                    </Link>
                </div>

                <div className={headerscss.link_container}>
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
                    <div className={headerscss.fangyuan_icon}>
                        <Image
                            src="/in/fangyuan_icon.png"
                            alt="fangyuan"
                            width={40}
                            height={40}
                        />

                    </div>
                </div>
            </div>
        </div>
    )
}






export default Header