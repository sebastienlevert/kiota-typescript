import {IosDeviceType, MobileApp, VppLicensingType} from './index';
import {VppTokenAccountType} from './vppTokenAccountType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IosVppApp extends MobileApp, Partial<Parsable> {
    /** The applicable iOS Device Type. */
    applicableDeviceType?: IosDeviceType;
    /** The store URL. */
    appStoreUrl?: string;
    /** The Identity Name. */
    bundleId?: string;
    /** The supported License Type. */
    licensingType?: VppLicensingType;
    /** The VPP application release date and time. */
    releaseDateTime?: Date;
    /** The total number of VPP licenses. */
    totalLicenseCount?: number;
    /** The number of VPP licenses in use. */
    usedLicenseCount?: number;
    /** Possible types of an Apple Volume Purchase Program token. */
    vppTokenAccountType?: VppTokenAccountType;
    /** The Apple Id associated with the given Apple Volume Purchase Program Token. */
    vppTokenAppleId?: string;
    /** The organization associated with the Apple Volume Purchase Program Token */
    vppTokenOrganizationName?: string;
}
