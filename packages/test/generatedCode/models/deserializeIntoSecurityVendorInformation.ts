import {SecurityVendorInformation} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSecurityVendorInformation(securityVendorInformation: SecurityVendorInformation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { securityVendorInformation.odataType = n.getStringValue() as any ; },
        "provider": n => { securityVendorInformation.provider = n.getStringValue() as any ; },
        "providerVersion": n => { securityVendorInformation.providerVersion = n.getStringValue() as any ; },
        "subProvider": n => { securityVendorInformation.subProvider = n.getStringValue() as any ; },
        "vendor": n => { securityVendorInformation.vendor = n.getStringValue() as any ; },
    }
}
