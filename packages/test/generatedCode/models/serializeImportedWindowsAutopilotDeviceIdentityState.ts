import {ImportedWindowsAutopilotDeviceIdentityImportStatus} from './importedWindowsAutopilotDeviceIdentityImportStatus';
import {ImportedWindowsAutopilotDeviceIdentityState} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeImportedWindowsAutopilotDeviceIdentityState(writer: SerializationWriter, importedWindowsAutopilotDeviceIdentityState: ImportedWindowsAutopilotDeviceIdentityState | undefined = {}) : void {
            writer.writeNumberValue("deviceErrorCode", importedWindowsAutopilotDeviceIdentityState.deviceErrorCode);
            writer.writeStringValue("deviceErrorName", importedWindowsAutopilotDeviceIdentityState.deviceErrorName);
            writer.writeEnumValue<ImportedWindowsAutopilotDeviceIdentityImportStatus>("deviceImportStatus", importedWindowsAutopilotDeviceIdentityState.deviceImportStatus);
            writer.writeStringValue("deviceRegistrationId", importedWindowsAutopilotDeviceIdentityState.deviceRegistrationId);
            writer.writeStringValue("@odata.type", importedWindowsAutopilotDeviceIdentityState.odataType);
}
