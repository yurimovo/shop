import { useMediaQuery } from "react-responsive";

export const useResponsive = () => {
    // @ts-ignore
    const DesktopLarge = ({ children }) => {
        const isDesktop = useMediaQuery({ minWidth: 1440 });
        return isDesktop ? children : null;
    };
    // @ts-ignore
    const Desktop = ({ children }) => {
        const isDesktop = useMediaQuery({ minWidth: 1000, maxWidth: 1439 });
        return isDesktop ? children : null;
    };
    // @ts-ignore
    const DesktopSmall = ({ children }) => {
        const isDesktop = useMediaQuery({ minWidth: 768, maxWidth: 999 });
        return isDesktop ? children : null;
    };
    // @ts-ignore

    const Tablet = ({ children }) => {
        const isTablet = useMediaQuery({ minWidth: 480, maxWidth: 768 });
        return isTablet ? children : null;
    };
    // @ts-ignore

    const Mobile = ({ children })=> {
        const isMobile = useMediaQuery({ minWidth: 360, maxWidth: 480 });
        return isMobile ? children : null;
    };

    const isNotSupported = useMediaQuery({ maxWidth: 300 });
    const isDesktopLarge = useMediaQuery({ minWidth: 1440 });
    const isDesktop      = useMediaQuery({ minWidth: 1000, maxWidth: 1439 });
    const isDesktopSmall = useMediaQuery({ minWidth: 768, maxWidth: 999 });
    const isTablet       = useMediaQuery({ minWidth: 480, maxWidth: 767 });
    const isMobile       = useMediaQuery({ minWidth: 360, maxWidth: 479 });

    const width = () => {
        if (isDesktopLarge) return 1120;
        if (isDesktop) return 872;
        if (isDesktopSmall) return 728;
        if (isTablet) return 440;
        if (isMobile) return 320;
    };

    const height = () => {
        if (isDesktop) return 1296;
        if (isDesktopSmall) return 990;
        if (isTablet) return 900;
        if (isMobile) return 500;
    };

    return {
        DesktopLarge, Desktop, Tablet, Mobile, DesktopSmall, isNotSupported, isDesktopLarge, isDesktop,isDesktopSmall, isTablet, isMobile, width, height
    };
};