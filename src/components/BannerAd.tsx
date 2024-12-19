import { useEffect } from "react";

interface BannerAdProps {
    adClient: string;
    adSlot: string;
    adFormat?: string;
    adLayoutKey?: string;
}

const BannerAd = ({ adClient, adSlot, adFormat = "fluid", adLayoutKey }: BannerAdProps) => {
    useEffect(() => {
        try {
            if (window.adsbygoogle) {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            }
        } catch (e) {
            console.error("Adsense error:", e);
        }
    }, []);

    return (
        <div>
            <ins
                className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client={adClient}
                data-ad-slot={adSlot}
                data-ad-format={adFormat}
                data-ad-layout-key={adLayoutKey}
            ></ins>
        </div>
    );
};

export default BannerAd;
