import {deserializeIntoEventMessageDetail} from './deserializeIntoEventMessageDetail';
import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {deserializeIntoTeamworkUserIdentity} from './deserializeIntoTeamworkUserIdentity';
import {MembersAddedEventMessageDetail} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMembersAddedEventMessageDetail(membersAddedEventMessageDetail: MembersAddedEventMessageDetail | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(membersAddedEventMessageDetail),
        "initiator": n => { membersAddedEventMessageDetail.initiator = n.getObject(deserializeIntoIdentitySet) as any ; },
        "members": n => { membersAddedEventMessageDetail.members = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTeamworkUserIdentity) as any ; },
        "visibleHistoryStartDateTime": n => { membersAddedEventMessageDetail.visibleHistoryStartDateTime = n.getDateValue() as any ; },
    }
}
