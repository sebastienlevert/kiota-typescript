import {DeviceHealth} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceHealth(deviceHealth: DeviceHealth | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "lastConnectionTime": n => { deviceHealth.lastConnectionTime = n.getDateValue() as any ; },
    }
}
