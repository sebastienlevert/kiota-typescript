import {EditionUpgradeLicenseType} from './editionUpgradeLicenseType';
import {DeviceConfiguration} from './index';
import {Windows10EditionType} from './windows10EditionType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EditionUpgradeConfiguration extends DeviceConfiguration, Partial<Parsable> {
    /** Edition Upgrade License File Content. */
    license?: string;
    /** Edition Upgrade License type */
    licenseType?: EditionUpgradeLicenseType;
    /** Edition Upgrade Product Key. */
    productKey?: string;
    /** Windows 10 Edition type. */
    targetEdition?: Windows10EditionType;
}
