import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoImportedWindowsAutopilotDeviceIdentity} from './deserializeIntoImportedWindowsAutopilotDeviceIdentity';
import {ImportedWindowsAutopilotDeviceIdentityUploadStatus} from './importedWindowsAutopilotDeviceIdentityUploadStatus';
import {ImportedWindowsAutopilotDeviceIdentityUpload} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoImportedWindowsAutopilotDeviceIdentityUpload(importedWindowsAutopilotDeviceIdentityUpload: ImportedWindowsAutopilotDeviceIdentityUpload | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(importedWindowsAutopilotDeviceIdentityUpload),
        "createdDateTimeUtc": n => { importedWindowsAutopilotDeviceIdentityUpload.createdDateTimeUtc = n.getDateValue() as any ; },
        "deviceIdentities": n => { importedWindowsAutopilotDeviceIdentityUpload.deviceIdentities = n.getCollectionOfObjectValuesFromMethod(deserializeIntoImportedWindowsAutopilotDeviceIdentity) as any ; },
        "status": n => { importedWindowsAutopilotDeviceIdentityUpload.status = n.getEnumValue<ImportedWindowsAutopilotDeviceIdentityUploadStatus>(ImportedWindowsAutopilotDeviceIdentityUploadStatus) as any ; },
    }
}
