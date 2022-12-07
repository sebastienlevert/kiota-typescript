import {DeviceAndAppManagementAssignmentSource} from './deviceAndAppManagementAssignmentSource';
import {DeviceAndAppManagementAssignmentTarget, Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EnrollmentConfigurationAssignment extends Entity, Partial<Parsable> {
    /** Represents source of assignment. */
    source?: DeviceAndAppManagementAssignmentSource;
    /** Identifier for resource used for deployment to a group */
    sourceId?: string;
    /** Base type for assignment targets. */
    target?: DeviceAndAppManagementAssignmentTarget;
}
