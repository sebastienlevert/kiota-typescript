import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceConfigurationUserOverview extends Entity, Partial<Parsable> {
    /** Version of the policy for that overview */
    configurationVersion?: number;
    /** Number of error Users */
    errorCount?: number;
    /** Number of failed Users */
    failedCount?: number;
    /** Last update time */
    lastUpdateDateTime?: Date;
    /** Number of not applicable users */
    notApplicableCount?: number;
    /** Number of pending Users */
    pendingCount?: number;
    /** Number of succeeded Users */
    successCount?: number;
}
