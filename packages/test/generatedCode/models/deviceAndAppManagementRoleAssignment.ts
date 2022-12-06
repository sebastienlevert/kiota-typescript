import {RoleAssignment} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceAndAppManagementRoleAssignment extends Partial<Parsable>, RoleAssignment {
    /** The list of ids of role member security groups. These are IDs from Azure Active Directory. */
    members?: string[];
}
