import {MobileApp} from './index';
import {MicrosoftStoreForBusinessLicenseType} from './microsoftStoreForBusinessLicenseType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MicrosoftStoreForBusinessApp extends MobileApp, Partial<Parsable> {
    /** The licenseType property */
    licenseType?: MicrosoftStoreForBusinessLicenseType;
    /** The app package identifier */
    packageIdentityName?: string;
    /** The app product key */
    productKey?: string;
    /** The total number of Microsoft Store for Business licenses. */
    totalLicenseCount?: number;
    /** The number of Microsoft Store for Business licenses in use. */
    usedLicenseCount?: number;
}
