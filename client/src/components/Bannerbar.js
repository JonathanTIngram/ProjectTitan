import React from 'react'

import {
    Banner,
    BannerInfo,
    BannerMenu,
  } from './BannerData';

const Bannerbar = () => {
    return (
        <>
        <Banner>
            <BannerMenu>
                <BannerInfo>
                  TITAN
                </BannerInfo>
                <BannerInfo>
                  78{'\u00b0'}  - 0 Storms  in Range
                </BannerInfo>
                <BannerInfo>
                  18,982 guests in park
                </BannerInfo>
                <BannerInfo>
                  PARK  STATUS: Operating
                </BannerInfo>
                <BannerInfo>
                  41{'\u00b0'} Operating Effiecency
                </BannerInfo>
                <BannerInfo>
                  Image Image Image
                </BannerInfo>
            </BannerMenu>
        </Banner>
        </>
    )
}

export default Bannerbar