import {IosDeviceType} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosDeviceType(iosDeviceType: IosDeviceType | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "iPad": n => { iosDeviceType.iPad = n.getBooleanValue() as any ; },
        "iPhoneAndIPod": n => { iosDeviceType.iPhoneAndIPod = n.getBooleanValue() as any ; },
        "@odata.type": n => { iosDeviceType.odataType = n.getStringValue() as any ; },
    }
}
