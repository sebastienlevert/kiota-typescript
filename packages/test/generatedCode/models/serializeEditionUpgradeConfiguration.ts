import {EditionUpgradeLicenseType} from './editionUpgradeLicenseType';
import {EditionUpgradeConfiguration} from './index';
import {serializeDeviceConfiguration} from './serializeDeviceConfiguration';
import {Windows10EditionType} from './windows10EditionType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEditionUpgradeConfiguration(writer: SerializationWriter, editionUpgradeConfiguration: EditionUpgradeConfiguration | undefined = {}) : void {
        serializeDeviceConfiguration(writer, editionUpgradeConfiguration)
            writer.writeStringValue("license", editionUpgradeConfiguration.license);
            writer.writeEnumValue<EditionUpgradeLicenseType>("licenseType", editionUpgradeConfiguration.licenseType);
            writer.writeStringValue("productKey", editionUpgradeConfiguration.productKey);
            writer.writeEnumValue<Windows10EditionType>("targetEdition", editionUpgradeConfiguration.targetEdition);
}
