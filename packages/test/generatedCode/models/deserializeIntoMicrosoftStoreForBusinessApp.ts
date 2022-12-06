import {deserializeIntoMobileApp} from './deserializeIntoMobileApp';
import {MicrosoftStoreForBusinessApp} from './index';
import {MicrosoftStoreForBusinessLicenseType} from './microsoftStoreForBusinessLicenseType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMicrosoftStoreForBusinessApp(microsoftStoreForBusinessApp: MicrosoftStoreForBusinessApp | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileApp(microsoftStoreForBusinessApp),
        "licenseType": n => { microsoftStoreForBusinessApp.licenseType = n.getEnumValue<MicrosoftStoreForBusinessLicenseType>(MicrosoftStoreForBusinessLicenseType) as any ; },
        "packageIdentityName": n => { microsoftStoreForBusinessApp.packageIdentityName = n.getStringValue() as any ; },
        "productKey": n => { microsoftStoreForBusinessApp.productKey = n.getStringValue() as any ; },
        "totalLicenseCount": n => { microsoftStoreForBusinessApp.totalLicenseCount = n.getNumberValue() as any ; },
        "usedLicenseCount": n => { microsoftStoreForBusinessApp.usedLicenseCount = n.getNumberValue() as any ; },
    }
}
