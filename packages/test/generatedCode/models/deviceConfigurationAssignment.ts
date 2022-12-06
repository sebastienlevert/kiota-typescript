import {DeviceAndAppManagementAssignmentTarget, Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceConfigurationAssignment extends Entity, Partial<Parsable> {
    /** The assignment target for the device configuration. */
    target?: DeviceAndAppManagementAssignmentTarget;
}
