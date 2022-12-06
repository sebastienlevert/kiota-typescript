import {ImportedWindowsAutopilotDeviceIdentityImportStatus} from './importedWindowsAutopilotDeviceIdentityImportStatus';
import {ImportedWindowsAutopilotDeviceIdentityState} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoImportedWindowsAutopilotDeviceIdentityState(importedWindowsAutopilotDeviceIdentityState: ImportedWindowsAutopilotDeviceIdentityState | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "deviceErrorCode": n => { importedWindowsAutopilotDeviceIdentityState.deviceErrorCode = n.getNumberValue() as any ; },
        "deviceErrorName": n => { importedWindowsAutopilotDeviceIdentityState.deviceErrorName = n.getStringValue() as any ; },
        "deviceImportStatus": n => { importedWindowsAutopilotDeviceIdentityState.deviceImportStatus = n.getEnumValue<ImportedWindowsAutopilotDeviceIdentityImportStatus>(ImportedWindowsAutopilotDeviceIdentityImportStatus) as any ; },
        "deviceRegistrationId": n => { importedWindowsAutopilotDeviceIdentityState.deviceRegistrationId = n.getStringValue() as any ; },
        "@odata.type": n => { importedWindowsAutopilotDeviceIdentityState.odataType = n.getStringValue() as any ; },
    }
}
