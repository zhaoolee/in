import React from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link';
import topcarouselscss from './TopCarousel.module.scss';
import Image from 'next/image'

function TopCarousel(props) {



    return (
        <div className={topcarouselscss.container}>
            <Image
                src="/in/linggan_in.png"
                alt="方圆灵感导航"
                width={"auto"}
                height={40}
            />
        </div>
    )
}






export default TopCarousel