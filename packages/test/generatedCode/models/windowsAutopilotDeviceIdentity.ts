import {EnrollmentState} from './enrollmentState';
import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsAutopilotDeviceIdentity extends Entity, Partial<Parsable> {
    /** Addressable user name. */
    addressableUserName?: string;
    /** AAD Device ID - to be deprecated */
    azureActiveDirectoryDeviceId?: string;
    /** Display Name */
    displayName?: string;
    /** The enrollmentState property */
    enrollmentState?: EnrollmentState;
    /** Group Tag of the Windows autopilot device. */
    groupTag?: string;
    /** Intune Last Contacted Date Time of the Windows autopilot device. */
    lastContactedDateTime?: Date;
    /** Managed Device ID */
    managedDeviceId?: string;
    /** Oem manufacturer of the Windows autopilot device. */
    manufacturer?: string;
    /** Model name of the Windows autopilot device. */
    model?: string;
    /** Product Key of the Windows autopilot device. */
    productKey?: string;
    /** Purchase Order Identifier of the Windows autopilot device. */
    purchaseOrderIdentifier?: string;
    /** Resource Name. */
    resourceName?: string;
    /** Serial number of the Windows autopilot device. */
    serialNumber?: string;
    /** SKU Number */
    skuNumber?: string;
    /** System Family */
    systemFamily?: string;
    /** User Principal Name. */
    userPrincipalName?: string;
}
