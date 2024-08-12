"use client";
import React, { useEffect } from "react";

type AdBannerTypes = {
  dataAdSlot: string;
  dataAdFormat: string;
  dataFullWidthResponsive: boolean;
  onAdClick?: () => void; // Optional onClick handler
};

const AdBanner = ({
  dataAdSlot,
  dataAdFormat,
  dataFullWidthResponsive,
  onAdClick, // Add onClick to the props
}: AdBannerTypes) => {
  useEffect(() => {
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
        {}
      );
    } catch (error: any) {
      console.log(error.message);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-4739302499828467"
      data-ad-slot={dataAdSlot}
      data-ad-format={dataAdFormat}
      data-full-width-responsive={dataFullWidthResponsive.toString()}
      onClick={onAdClick} // Add onClick directly to ins
    ></ins>
  );
};

export default AdBanner;
