import {MembersJoinedEventMessageDetail} from './index';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializeTeamworkUserIdentity} from './serializeTeamworkUserIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMembersJoinedEventMessageDetail(writer: SerializationWriter, membersJoinedEventMessageDetail: MembersJoinedEventMessageDetail | undefined = {}) : void {
        serializeEventMessageDetail(writer, membersJoinedEventMessageDetail)
            writer.writeObjectValueFromMethod("initiator", membersJoinedEventMessageDetail.initiator as any, serializeIdentitySet);
            writer.writeCollectionOfObjectValuesFromMethod("members", membersJoinedEventMessageDetail.members as any, serializeTeamworkUserIdentity);
}
