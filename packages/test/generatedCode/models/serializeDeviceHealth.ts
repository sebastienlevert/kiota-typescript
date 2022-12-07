import {DeviceHealth} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceHealth(writer: SerializationWriter, deviceHealth: DeviceHealth | undefined = {}) : void {
            writer.writeDateValue("lastConnectionTime", deviceHealth.lastConnectionTime);
}
