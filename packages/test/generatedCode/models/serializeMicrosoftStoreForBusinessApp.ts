import {MicrosoftStoreForBusinessApp} from './index';
import {MicrosoftStoreForBusinessLicenseType} from './microsoftStoreForBusinessLicenseType';
import {serializeMobileApp} from './serializeMobileApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMicrosoftStoreForBusinessApp(writer: SerializationWriter, microsoftStoreForBusinessApp: MicrosoftStoreForBusinessApp | undefined = {}) : void {
        serializeMobileApp(writer, microsoftStoreForBusinessApp)
            writer.writeEnumValue<MicrosoftStoreForBusinessLicenseType>("licenseType", microsoftStoreForBusinessApp.licenseType);
            writer.writeStringValue("packageIdentityName", microsoftStoreForBusinessApp.packageIdentityName);
            writer.writeStringValue("productKey", microsoftStoreForBusinessApp.productKey);
            writer.writeNumberValue("totalLicenseCount", microsoftStoreForBusinessApp.totalLicenseCount);
            writer.writeNumberValue("usedLicenseCount", microsoftStoreForBusinessApp.usedLicenseCount);
}
