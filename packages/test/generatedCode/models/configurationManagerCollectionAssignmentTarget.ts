import {DeviceAndAppManagementAssignmentTarget} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ConfigurationManagerCollectionAssignmentTarget extends DeviceAndAppManagementAssignmentTarget, Partial<Parsable> {
    /** The collection Id that is the target of the assignment. */
    collectionId?: string;
}
