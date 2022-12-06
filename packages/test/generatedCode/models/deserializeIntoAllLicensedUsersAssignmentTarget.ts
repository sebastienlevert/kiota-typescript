import {deserializeIntoDeviceAndAppManagementAssignmentTarget} from './deserializeIntoDeviceAndAppManagementAssignmentTarget';
import {AllLicensedUsersAssignmentTarget} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAllLicensedUsersAssignmentTarget(allLicensedUsersAssignmentTarget: AllLicensedUsersAssignmentTarget | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceAndAppManagementAssignmentTarget(allLicensedUsersAssignmentTarget),
    }
}
