import {TeamRenamedEventMessageDetail} from './index';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamRenamedEventMessageDetail(writer: SerializationWriter, teamRenamedEventMessageDetail: TeamRenamedEventMessageDetail | undefined = {}) : void {
        serializeEventMessageDetail(writer, teamRenamedEventMessageDetail)
            writer.writeObjectValueFromMethod("initiator", teamRenamedEventMessageDetail.initiator as any, serializeIdentitySet);
            writer.writeStringValue("teamDisplayName", teamRenamedEventMessageDetail.teamDisplayName);
            writer.writeStringValue("teamId", teamRenamedEventMessageDetail.teamId);
}
