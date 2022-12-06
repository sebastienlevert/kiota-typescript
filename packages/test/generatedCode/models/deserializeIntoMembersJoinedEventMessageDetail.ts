import {deserializeIntoEventMessageDetail} from './deserializeIntoEventMessageDetail';
import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {deserializeIntoTeamworkUserIdentity} from './deserializeIntoTeamworkUserIdentity';
import {MembersJoinedEventMessageDetail} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMembersJoinedEventMessageDetail(membersJoinedEventMessageDetail: MembersJoinedEventMessageDetail | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(membersJoinedEventMessageDetail),
        "initiator": n => { membersJoinedEventMessageDetail.initiator = n.getObject(deserializeIntoIdentitySet) as any ; },
        "members": n => { membersJoinedEventMessageDetail.members = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTeamworkUserIdentity) as any ; },
    }
}
