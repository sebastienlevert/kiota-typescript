import {ManagedAppConfiguration, ManagedAppPolicyDeploymentSummary, ManagedMobileApp, TargetedManagedAppPolicyAssignment} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TargetedManagedAppConfiguration extends ManagedAppConfiguration, Partial<Parsable> {
    /** List of apps to which the policy is deployed. */
    apps?: ManagedMobileApp[];
    /** Navigation property to list of inclusion and exclusion groups to which the policy is deployed. */
    assignments?: TargetedManagedAppPolicyAssignment[];
    /** Count of apps to which the current policy is deployed. */
    deployedAppCount?: number;
    /** Navigation property to deployment summary of the configuration. */
    deploymentSummary?: ManagedAppPolicyDeploymentSummary;
    /** Indicates if the policy is deployed to any inclusion groups or not. */
    isAssigned?: boolean;
}
