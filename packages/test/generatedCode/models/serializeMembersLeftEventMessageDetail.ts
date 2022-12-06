import {MembersLeftEventMessageDetail} from './index';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializeTeamworkUserIdentity} from './serializeTeamworkUserIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMembersLeftEventMessageDetail(writer: SerializationWriter, membersLeftEventMessageDetail: MembersLeftEventMessageDetail | undefined = {}) : void {
        serializeEventMessageDetail(writer, membersLeftEventMessageDetail)
            writer.writeObjectValueFromMethod("initiator", membersLeftEventMessageDetail.initiator as any, serializeIdentitySet);
            writer.writeCollectionOfObjectValuesFromMethod("members", membersLeftEventMessageDetail.members as any, serializeTeamworkUserIdentity);
}
