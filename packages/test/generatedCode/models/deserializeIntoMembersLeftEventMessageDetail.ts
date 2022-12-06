import {deserializeIntoEventMessageDetail} from './deserializeIntoEventMessageDetail';
import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {deserializeIntoTeamworkUserIdentity} from './deserializeIntoTeamworkUserIdentity';
import {MembersLeftEventMessageDetail} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMembersLeftEventMessageDetail(membersLeftEventMessageDetail: MembersLeftEventMessageDetail | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(membersLeftEventMessageDetail),
        "initiator": n => { membersLeftEventMessageDetail.initiator = n.getObject(deserializeIntoIdentitySet) as any ; },
        "members": n => { membersLeftEventMessageDetail.members = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTeamworkUserIdentity) as any ; },
    }
}
