import {DeviceAndAppManagementAssignmentTarget} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GroupAssignmentTarget extends DeviceAndAppManagementAssignmentTarget, Partial<Parsable> {
    /** The group Id that is the target of the assignment. */
    groupId?: string;
}
