import {Entity, ManagedAppPolicyDeploymentSummaryPerApp} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedAppPolicyDeploymentSummary extends Entity, Partial<Parsable> {
    /** Not yet documented */
    configurationDeployedUserCount?: number;
    /** Not yet documented */
    configurationDeploymentSummaryPerApp?: ManagedAppPolicyDeploymentSummaryPerApp[];
    /** Not yet documented */
    displayName?: string;
    /** Not yet documented */
    lastRefreshTime?: Date;
    /** Version of the entity. */
    version?: string;
}
