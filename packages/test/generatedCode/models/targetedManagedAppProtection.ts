import {ManagedAppProtection, TargetedManagedAppPolicyAssignment} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TargetedManagedAppProtection extends ManagedAppProtection, Partial<Parsable> {
    /** Navigation property to list of inclusion and exclusion groups to which the policy is deployed. */
    assignments?: TargetedManagedAppPolicyAssignment[];
    /** Indicates if the policy is deployed to any inclusion groups or not. */
    isAssigned?: boolean;
}
