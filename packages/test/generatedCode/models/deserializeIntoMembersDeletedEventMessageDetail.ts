import {deserializeIntoEventMessageDetail} from './deserializeIntoEventMessageDetail';
import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {deserializeIntoTeamworkUserIdentity} from './deserializeIntoTeamworkUserIdentity';
import {MembersDeletedEventMessageDetail} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMembersDeletedEventMessageDetail(membersDeletedEventMessageDetail: MembersDeletedEventMessageDetail | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(membersDeletedEventMessageDetail),
        "initiator": n => { membersDeletedEventMessageDetail.initiator = n.getObject(deserializeIntoIdentitySet) as any ; },
        "members": n => { membersDeletedEventMessageDetail.members = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTeamworkUserIdentity) as any ; },
    }
}
