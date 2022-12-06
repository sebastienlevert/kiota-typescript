import {VppLicensingType} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoVppLicensingType(vppLicensingType: VppLicensingType | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { vppLicensingType.odataType = n.getStringValue() as any ; },
        "supportsDeviceLicensing": n => { vppLicensingType.supportsDeviceLicensing = n.getBooleanValue() as any ; },
        "supportsUserLicensing": n => { vppLicensingType.supportsUserLicensing = n.getBooleanValue() as any ; },
    }
}
