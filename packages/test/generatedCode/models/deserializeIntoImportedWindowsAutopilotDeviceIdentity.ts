import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoImportedWindowsAutopilotDeviceIdentityState} from './deserializeIntoImportedWindowsAutopilotDeviceIdentityState';
import {ImportedWindowsAutopilotDeviceIdentity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoImportedWindowsAutopilotDeviceIdentity(importedWindowsAutopilotDeviceIdentity: ImportedWindowsAutopilotDeviceIdentity | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(importedWindowsAutopilotDeviceIdentity),
        "assignedUserPrincipalName": n => { importedWindowsAutopilotDeviceIdentity.assignedUserPrincipalName = n.getStringValue() as any ; },
        "groupTag": n => { importedWindowsAutopilotDeviceIdentity.groupTag = n.getStringValue() as any ; },
        "hardwareIdentifier": n => { importedWindowsAutopilotDeviceIdentity.hardwareIdentifier = n.getStringValue() as any ; },
        "importId": n => { importedWindowsAutopilotDeviceIdentity.importId = n.getStringValue() as any ; },
        "productKey": n => { importedWindowsAutopilotDeviceIdentity.productKey = n.getStringValue() as any ; },
        "serialNumber": n => { importedWindowsAutopilotDeviceIdentity.serialNumber = n.getStringValue() as any ; },
        "state": n => { importedWindowsAutopilotDeviceIdentity.state = n.getObject(deserializeIntoImportedWindowsAutopilotDeviceIdentityState) as any ; },
    }
}
