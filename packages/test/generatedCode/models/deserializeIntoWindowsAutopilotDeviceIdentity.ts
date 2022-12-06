import {deserializeIntoEntity} from './deserializeIntoEntity';
import {EnrollmentState} from './enrollmentState';
import {WindowsAutopilotDeviceIdentity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsAutopilotDeviceIdentity(windowsAutopilotDeviceIdentity: WindowsAutopilotDeviceIdentity | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(windowsAutopilotDeviceIdentity),
        "addressableUserName": n => { windowsAutopilotDeviceIdentity.addressableUserName = n.getStringValue() as any ; },
        "azureActiveDirectoryDeviceId": n => { windowsAutopilotDeviceIdentity.azureActiveDirectoryDeviceId = n.getStringValue() as any ; },
        "displayName": n => { windowsAutopilotDeviceIdentity.displayName = n.getStringValue() as any ; },
        "enrollmentState": n => { windowsAutopilotDeviceIdentity.enrollmentState = n.getEnumValue<EnrollmentState>(EnrollmentState) as any ; },
        "groupTag": n => { windowsAutopilotDeviceIdentity.groupTag = n.getStringValue() as any ; },
        "lastContactedDateTime": n => { windowsAutopilotDeviceIdentity.lastContactedDateTime = n.getDateValue() as any ; },
        "managedDeviceId": n => { windowsAutopilotDeviceIdentity.managedDeviceId = n.getStringValue() as any ; },
        "manufacturer": n => { windowsAutopilotDeviceIdentity.manufacturer = n.getStringValue() as any ; },
        "model": n => { windowsAutopilotDeviceIdentity.model = n.getStringValue() as any ; },
        "productKey": n => { windowsAutopilotDeviceIdentity.productKey = n.getStringValue() as any ; },
        "purchaseOrderIdentifier": n => { windowsAutopilotDeviceIdentity.purchaseOrderIdentifier = n.getStringValue() as any ; },
        "resourceName": n => { windowsAutopilotDeviceIdentity.resourceName = n.getStringValue() as any ; },
        "serialNumber": n => { windowsAutopilotDeviceIdentity.serialNumber = n.getStringValue() as any ; },
        "skuNumber": n => { windowsAutopilotDeviceIdentity.skuNumber = n.getStringValue() as any ; },
        "systemFamily": n => { windowsAutopilotDeviceIdentity.systemFamily = n.getStringValue() as any ; },
        "userPrincipalName": n => { windowsAutopilotDeviceIdentity.userPrincipalName = n.getStringValue() as any ; },
    }
}
