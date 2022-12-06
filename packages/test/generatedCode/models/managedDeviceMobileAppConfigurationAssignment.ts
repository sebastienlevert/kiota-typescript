import {DeviceAndAppManagementAssignmentTarget, Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedDeviceMobileAppConfigurationAssignment extends Entity, Partial<Parsable> {
    /** Assignment target that the T&C policy is assigned to. */
    target?: DeviceAndAppManagementAssignmentTarget;
}
