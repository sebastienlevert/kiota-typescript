import {DeviceKey} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceKey(deviceKey: DeviceKey | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "deviceId": n => { deviceKey.deviceId = n.getStringValue() as any ; },
        "keyMaterial": n => { deviceKey.keyMaterial = n.getStringValue() as any ; },
        "keyType": n => { deviceKey.keyType = n.getStringValue() as any ; },
    }
}
