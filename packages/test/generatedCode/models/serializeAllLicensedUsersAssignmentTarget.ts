import {AllLicensedUsersAssignmentTarget} from './index';
import {serializeDeviceAndAppManagementAssignmentTarget} from './serializeDeviceAndAppManagementAssignmentTarget';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAllLicensedUsersAssignmentTarget(writer: SerializationWriter, allLicensedUsersAssignmentTarget: AllLicensedUsersAssignmentTarget | undefined = {}) : void {
        serializeDeviceAndAppManagementAssignmentTarget(writer, allLicensedUsersAssignmentTarget)
}
