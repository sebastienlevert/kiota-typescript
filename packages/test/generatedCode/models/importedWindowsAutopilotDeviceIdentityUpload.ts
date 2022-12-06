import {ImportedWindowsAutopilotDeviceIdentityUploadStatus} from './importedWindowsAutopilotDeviceIdentityUploadStatus';
import {Entity, ImportedWindowsAutopilotDeviceIdentity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ImportedWindowsAutopilotDeviceIdentityUpload extends Entity, Partial<Parsable> {
    /** DateTime when the entity is created. */
    createdDateTimeUtc?: Date;
    /** Collection of all Autopilot devices as a part of this upload. */
    deviceIdentities?: ImportedWindowsAutopilotDeviceIdentity[];
    /** The status property */
    status?: ImportedWindowsAutopilotDeviceIdentityUploadStatus;
}
