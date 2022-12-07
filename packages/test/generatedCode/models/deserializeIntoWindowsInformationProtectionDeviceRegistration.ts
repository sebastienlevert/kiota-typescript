import {deserializeIntoEntity} from './deserializeIntoEntity';
import {WindowsInformationProtectionDeviceRegistration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsInformationProtectionDeviceRegistration(windowsInformationProtectionDeviceRegistration: WindowsInformationProtectionDeviceRegistration | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(windowsInformationProtectionDeviceRegistration),
        "deviceMacAddress": n => { windowsInformationProtectionDeviceRegistration.deviceMacAddress = n.getStringValue() as any ; },
        "deviceName": n => { windowsInformationProtectionDeviceRegistration.deviceName = n.getStringValue() as any ; },
        "deviceRegistrationId": n => { windowsInformationProtectionDeviceRegistration.deviceRegistrationId = n.getStringValue() as any ; },
        "deviceType": n => { windowsInformationProtectionDeviceRegistration.deviceType = n.getStringValue() as any ; },
        "lastCheckInDateTime": n => { windowsInformationProtectionDeviceRegistration.lastCheckInDateTime = n.getDateValue() as any ; },
        "userId": n => { windowsInformationProtectionDeviceRegistration.userId = n.getStringValue() as any ; },
    }
}
