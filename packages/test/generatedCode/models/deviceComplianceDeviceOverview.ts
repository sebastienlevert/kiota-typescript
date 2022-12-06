import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceComplianceDeviceOverview extends Entity, Partial<Parsable> {
    /** Version of the policy for that overview */
    configurationVersion?: number;
    /** Number of error devices */
    errorCount?: number;
    /** Number of failed devices */
    failedCount?: number;
    /** Last update time */
    lastUpdateDateTime?: Date;
    /** Number of not applicable devices */
    notApplicableCount?: number;
    /** Number of pending devices */
    pendingCount?: number;
    /** Number of succeeded devices */
    successCount?: number;
}
