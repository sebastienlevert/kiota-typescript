import {MembersDeletedEventMessageDetail} from './index';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializeTeamworkUserIdentity} from './serializeTeamworkUserIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMembersDeletedEventMessageDetail(writer: SerializationWriter, membersDeletedEventMessageDetail: MembersDeletedEventMessageDetail | undefined = {}) : void {
        serializeEventMessageDetail(writer, membersDeletedEventMessageDetail)
            writer.writeObjectValueFromMethod("initiator", membersDeletedEventMessageDetail.initiator as any, serializeIdentitySet);
            writer.writeCollectionOfObjectValuesFromMethod("members", membersDeletedEventMessageDetail.members as any, serializeTeamworkUserIdentity);
}
