import {DeviceKey} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceKey(writer: SerializationWriter, deviceKey: DeviceKey | undefined = {}) : void {
            writer.writeStringValue("deviceId", deviceKey.deviceId);
            writer.writeStringValue("keyMaterial", deviceKey.keyMaterial);
            writer.writeStringValue("keyType", deviceKey.keyType);
}
