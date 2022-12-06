import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OrganizationalBrandingProperties extends Entity, Partial<Parsable> {
    /** Color that will appear in place of the background image in low-bandwidth connections. We recommend that you use the primary color of your banner logo or your organization color. Specify this in hexadecimal format, for example, white is #FFFFFF. */
    backgroundColor?: string;
    /** Image that appears as the background of the sign-in page. The allowed types are PNG or JPEG not smaller than 300 KB and not larger than 1920 × 1080 pixels. A smaller image will reduce bandwidth requirements and make the page load faster. */
    backgroundImage?: string;
    /** A relative URL for the backgroundImage property that is combined with a CDN base URL from the cdnList to provide the version served by a CDN. Read-only. */
    backgroundImageRelativeUrl?: string;
    /** A banner version of your company logo that appears on the sign-in page. The allowed types are PNG or JPEG no larger than 36 × 245 pixels. We recommend using a transparent image with no padding around the logo. */
    bannerLogo?: string;
    /** A relative url for the bannerLogo property that is combined with a CDN base URL from the cdnList to provide the read-only version served by a CDN. Read-only. */
    bannerLogoRelativeUrl?: string;
    /** A list of base URLs for all available CDN providers that are serving the assets of the current resource. Several CDN providers are used at the same time for high availability of read requests. Read-only. */
    cdnList?: string[];
    /** Text that appears at the bottom of the sign-in box. You can use this to communicate additional information, such as the phone number to your help desk or a legal statement. This text must be Unicode and not exceed 1024 characters. */
    signInPageText?: string;
    /** A square version of your company logo that appears in Windows 10 out-of-box experiences (OOBE) and when Windows Autopilot is enabled for deployment. Allowed types are PNG or JPEG no larger than 240 x 240 pixels and no more than 10 KB in size. We recommend using a transparent image with no padding around the logo. */
    squareLogo?: string;
    /** A relative url for the squareLogo property that is combined with a CDN base URL from the cdnList to provide the version served by a CDN. Read-only. */
    squareLogoRelativeUrl?: string;
    /** String that shows as the hint in the username textbox on the sign-in screen. This text must be a Unicode, without links or code, and can't exceed 64 characters. */
    usernameHintText?: string;
}
