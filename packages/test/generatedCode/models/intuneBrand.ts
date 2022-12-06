import {MimeContent, RgbColor} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface IntuneBrand extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Email address of the person/organization responsible for IT support. */
    contactITEmailAddress?: string;
    /** Name of the person/organization responsible for IT support. */
    contactITName?: string;
    /** Text comments regarding the person/organization responsible for IT support. */
    contactITNotes?: string;
    /** Phone number of the person/organization responsible for IT support. */
    contactITPhoneNumber?: string;
    /** Logo image displayed in Company Portal apps which have a dark background behind the logo. */
    darkBackgroundLogo?: MimeContent;
    /** Company/organization name that is displayed to end users. */
    displayName?: string;
    /** Logo image displayed in Company Portal apps which have a light background behind the logo. */
    lightBackgroundLogo?: MimeContent;
    /** The OdataType property */
    odataType?: string;
    /** Display name of the company/organization’s IT helpdesk site. */
    onlineSupportSiteName?: string;
    /** URL to the company/organization’s IT helpdesk site. */
    onlineSupportSiteUrl?: string;
    /** URL to the company/organization’s privacy policy. */
    privacyUrl?: string;
    /** Boolean that represents whether the administrator-supplied display name will be shown next to the logo image. */
    showDisplayNameNextToLogo?: boolean;
    /** Boolean that represents whether the administrator-supplied logo images are shown or not shown. */
    showLogo?: boolean;
    /** Boolean that represents whether the administrator-supplied display name will be shown next to the logo image. */
    showNameNextToLogo?: boolean;
    /** Primary theme color used in the Company Portal applications and web portal. */
    themeColor?: RgbColor;
}
