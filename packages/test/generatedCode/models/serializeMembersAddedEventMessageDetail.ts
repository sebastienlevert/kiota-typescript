import {MembersAddedEventMessageDetail} from './index';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializeTeamworkUserIdentity} from './serializeTeamworkUserIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMembersAddedEventMessageDetail(writer: SerializationWriter, membersAddedEventMessageDetail: MembersAddedEventMessageDetail | undefined = {}) : void {
        serializeEventMessageDetail(writer, membersAddedEventMessageDetail)
            writer.writeObjectValueFromMethod("initiator", membersAddedEventMessageDetail.initiator as any, serializeIdentitySet);
            writer.writeCollectionOfObjectValuesFromMethod("members", membersAddedEventMessageDetail.members as any, serializeTeamworkUserIdentity);
            writer.writeDateValue("visibleHistoryStartDateTime", membersAddedEventMessageDetail.visibleHistoryStartDateTime);
}
