import {DeviceDetail} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceDetail(deviceDetail: DeviceDetail | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "browser": n => { deviceDetail.browser = n.getStringValue() as any ; },
        "deviceId": n => { deviceDetail.deviceId = n.getStringValue() as any ; },
        "displayName": n => { deviceDetail.displayName = n.getStringValue() as any ; },
        "isCompliant": n => { deviceDetail.isCompliant = n.getBooleanValue() as any ; },
        "isManaged": n => { deviceDetail.isManaged = n.getBooleanValue() as any ; },
        "@odata.type": n => { deviceDetail.odataType = n.getStringValue() as any ; },
        "operatingSystem": n => { deviceDetail.operatingSystem = n.getStringValue() as any ; },
        "trustType": n => { deviceDetail.trustType = n.getStringValue() as any ; },
    }
}
