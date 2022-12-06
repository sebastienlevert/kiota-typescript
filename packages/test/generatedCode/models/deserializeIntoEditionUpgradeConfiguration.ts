import {deserializeIntoDeviceConfiguration} from './deserializeIntoDeviceConfiguration';
import {EditionUpgradeLicenseType} from './editionUpgradeLicenseType';
import {EditionUpgradeConfiguration} from './index';
import {Windows10EditionType} from './windows10EditionType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEditionUpgradeConfiguration(editionUpgradeConfiguration: EditionUpgradeConfiguration | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceConfiguration(editionUpgradeConfiguration),
        "license": n => { editionUpgradeConfiguration.license = n.getStringValue() as any ; },
        "licenseType": n => { editionUpgradeConfiguration.licenseType = n.getEnumValue<EditionUpgradeLicenseType>(EditionUpgradeLicenseType) as any ; },
        "productKey": n => { editionUpgradeConfiguration.productKey = n.getStringValue() as any ; },
        "targetEdition": n => { editionUpgradeConfiguration.targetEdition = n.getEnumValue<Windows10EditionType>(Windows10EditionType) as any ; },
    }
}
