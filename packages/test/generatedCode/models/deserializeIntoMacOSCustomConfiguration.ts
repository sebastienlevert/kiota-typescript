import {deserializeIntoDeviceConfiguration} from './deserializeIntoDeviceConfiguration';
import {MacOSCustomConfiguration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMacOSCustomConfiguration(macOSCustomConfiguration: MacOSCustomConfiguration | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceConfiguration(macOSCustomConfiguration),
        "payload": n => { macOSCustomConfiguration.payload = n.getStringValue() as any ; },
        "payloadFileName": n => { macOSCustomConfiguration.payloadFileName = n.getStringValue() as any ; },
        "payloadName": n => { macOSCustomConfiguration.payloadName = n.getStringValue() as any ; },
    }
}
