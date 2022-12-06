import {BaseCollectionPaginationCountResponse, DeviceAndAppManagementRoleAssignment} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceAndAppManagementRoleAssignmentCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: DeviceAndAppManagementRoleAssignment[];
}
