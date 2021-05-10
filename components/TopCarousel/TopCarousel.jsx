import React from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link';
import topcarouselscss from './TopCarousel.module.scss';
import Image from 'next/image'

function TopCarousel(props) {



    return (
        <div className={topcarouselscss.container}>

            <div className={topcarouselscss.container_big_img}>

                <Image
                    src="/in/linggan_in.png"
                    alt="方圆灵感导航"
                    width={1440}
                    height={778}
                />

                <div className={topcarouselscss.linggan_txt+" animate__animated  animate__zoomIn"}>

                    <Image

                        src="/in/linggan_txt.png"
                        alt="灵感"
                        width={683}
                        height={500}
                    />

                </div>


            </div>

        </div>
    )
}






export default TopCarousel