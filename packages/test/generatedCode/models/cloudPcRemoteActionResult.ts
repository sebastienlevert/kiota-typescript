import {ActionState} from './actionState';
import {CloudPcStatusDetails} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface CloudPcRemoteActionResult extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** The specified action. Supported values in the Microsoft Endpoint Manager portal are: Reprovision, Resize, Restore. Supported values in enterprise Cloud PC devices are: Reboot, Rename, Reprovision, Troubleshoot. */
    actionName?: string;
    /** The actionState property */
    actionState?: ActionState;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The ID of the Cloud PC device on which the remote action is performed. Read-only. */
    cloudPcId?: string;
    /** Last update time for action. The Timestamp is shown in ISO 8601 format and Coordinated Universal Time (UTC). For example, midnight UTC on Jan 1, 2014 appears as '2014-01-01T00:00:00Z'. */
    lastUpdatedDateTime?: Date;
    /** The ID of the Intune managed device on which the remote action is performed. Read-only. */
    managedDeviceId?: string;
    /** Time the action was initiated. The Timestamp is shown in ISO 8601 format and Coordinated Universal Time (UTC). For example, midnight UTC on Jan 1, 2014 appears as '2014-01-01T00:00:00Z'. */
    startDateTime?: Date;
    /** The statusDetails property */
    statusDetails?: CloudPcStatusDetails;
}
