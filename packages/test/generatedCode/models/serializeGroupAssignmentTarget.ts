import {GroupAssignmentTarget} from './index';
import {serializeDeviceAndAppManagementAssignmentTarget} from './serializeDeviceAndAppManagementAssignmentTarget';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGroupAssignmentTarget(writer: SerializationWriter, groupAssignmentTarget: GroupAssignmentTarget | undefined = {}) : void {
        serializeDeviceAndAppManagementAssignmentTarget(writer, groupAssignmentTarget)
            writer.writeStringValue("groupId", groupAssignmentTarget.groupId);
}
