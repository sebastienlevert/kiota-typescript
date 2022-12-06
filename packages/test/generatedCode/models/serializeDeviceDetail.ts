import {DeviceDetail} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceDetail(writer: SerializationWriter, deviceDetail: DeviceDetail | undefined = {}) : void {
            writer.writeStringValue("browser", deviceDetail.browser);
            writer.writeStringValue("deviceId", deviceDetail.deviceId);
            writer.writeStringValue("displayName", deviceDetail.displayName);
            writer.writeBooleanValue("isCompliant", deviceDetail.isCompliant);
            writer.writeBooleanValue("isManaged", deviceDetail.isManaged);
            writer.writeStringValue("@odata.type", deviceDetail.odataType);
            writer.writeStringValue("operatingSystem", deviceDetail.operatingSystem);
            writer.writeStringValue("trustType", deviceDetail.trustType);
}
