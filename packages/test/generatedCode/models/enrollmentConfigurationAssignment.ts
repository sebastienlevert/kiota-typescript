import {DeviceAndAppManagementAssignmentTarget, Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EnrollmentConfigurationAssignment extends Entity, Partial<Parsable> {
    /** Represents an assignment to managed devices in the tenant */
    target?: DeviceAndAppManagementAssignmentTarget;
}
