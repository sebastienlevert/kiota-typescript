import {ImportedWindowsAutopilotDeviceIdentityUploadStatus} from './importedWindowsAutopilotDeviceIdentityUploadStatus';
import {ImportedWindowsAutopilotDeviceIdentityUpload} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeImportedWindowsAutopilotDeviceIdentity} from './serializeImportedWindowsAutopilotDeviceIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeImportedWindowsAutopilotDeviceIdentityUpload(writer: SerializationWriter, importedWindowsAutopilotDeviceIdentityUpload: ImportedWindowsAutopilotDeviceIdentityUpload | undefined = {}) : void {
        serializeEntity(writer, importedWindowsAutopilotDeviceIdentityUpload)
            writer.writeDateValue("createdDateTimeUtc", importedWindowsAutopilotDeviceIdentityUpload.createdDateTimeUtc);
            writer.writeCollectionOfObjectValuesFromMethod("deviceIdentities", importedWindowsAutopilotDeviceIdentityUpload.deviceIdentities as any, serializeImportedWindowsAutopilotDeviceIdentity);
            writer.writeEnumValue<ImportedWindowsAutopilotDeviceIdentityUploadStatus>("status", importedWindowsAutopilotDeviceIdentityUpload.status);
}
