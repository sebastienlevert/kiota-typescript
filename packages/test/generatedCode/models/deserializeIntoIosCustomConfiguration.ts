import {deserializeIntoDeviceConfiguration} from './deserializeIntoDeviceConfiguration';
import {IosCustomConfiguration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosCustomConfiguration(iosCustomConfiguration: IosCustomConfiguration | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceConfiguration(iosCustomConfiguration),
        "payload": n => { iosCustomConfiguration.payload = n.getStringValue() as any ; },
        "payloadFileName": n => { iosCustomConfiguration.payloadFileName = n.getStringValue() as any ; },
        "payloadName": n => { iosCustomConfiguration.payloadName = n.getStringValue() as any ; },
    }
}
