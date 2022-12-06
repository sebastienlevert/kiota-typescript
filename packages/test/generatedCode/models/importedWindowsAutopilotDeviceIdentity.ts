import {Entity, ImportedWindowsAutopilotDeviceIdentityState} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ImportedWindowsAutopilotDeviceIdentity extends Entity, Partial<Parsable> {
    /** UPN of the user the device will be assigned */
    assignedUserPrincipalName?: string;
    /** Group Tag of the Windows autopilot device. */
    groupTag?: string;
    /** Hardware Blob of the Windows autopilot device. */
    hardwareIdentifier?: string;
    /** The Import Id of the Windows autopilot device. */
    importId?: string;
    /** Product Key of the Windows autopilot device. */
    productKey?: string;
    /** Serial number of the Windows autopilot device. */
    serialNumber?: string;
    /** Current state of the imported device. */
    state?: ImportedWindowsAutopilotDeviceIdentityState;
}
