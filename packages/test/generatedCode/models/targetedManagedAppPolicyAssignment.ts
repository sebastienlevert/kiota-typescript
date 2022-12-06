import {DeviceAndAppManagementAssignmentTarget, Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TargetedManagedAppPolicyAssignment extends Entity, Partial<Parsable> {
    /** Identifier for deployment to a group or app */
    target?: DeviceAndAppManagementAssignmentTarget;
}
