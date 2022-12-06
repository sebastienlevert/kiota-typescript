import {deserializeIntoDeviceAndAppManagementAssignmentTarget} from './deserializeIntoDeviceAndAppManagementAssignmentTarget';
import {GroupAssignmentTarget} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGroupAssignmentTarget(groupAssignmentTarget: GroupAssignmentTarget | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceAndAppManagementAssignmentTarget(groupAssignmentTarget),
        "groupId": n => { groupAssignmentTarget.groupId = n.getStringValue() as any ; },
    }
}
