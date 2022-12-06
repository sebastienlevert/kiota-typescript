import {TeamUnarchivedEventMessageDetail} from './index';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamUnarchivedEventMessageDetail(writer: SerializationWriter, teamUnarchivedEventMessageDetail: TeamUnarchivedEventMessageDetail | undefined = {}) : void {
        serializeEventMessageDetail(writer, teamUnarchivedEventMessageDetail)
            writer.writeObjectValueFromMethod("initiator", teamUnarchivedEventMessageDetail.initiator as any, serializeIdentitySet);
            writer.writeStringValue("teamId", teamUnarchivedEventMessageDetail.teamId);
}
