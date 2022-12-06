import {deserializeIntoSubjectSet} from './deserializeIntoSubjectSet';
import {GroupMembers} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGroupMembers(groupMembers: GroupMembers | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoSubjectSet(groupMembers),
        "description": n => { groupMembers.description = n.getStringValue() as any ; },
        "groupId": n => { groupMembers.groupId = n.getStringValue() as any ; },
    }
}
