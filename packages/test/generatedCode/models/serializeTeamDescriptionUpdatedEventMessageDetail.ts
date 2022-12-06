import {TeamDescriptionUpdatedEventMessageDetail} from './index';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamDescriptionUpdatedEventMessageDetail(writer: SerializationWriter, teamDescriptionUpdatedEventMessageDetail: TeamDescriptionUpdatedEventMessageDetail | undefined = {}) : void {
        serializeEventMessageDetail(writer, teamDescriptionUpdatedEventMessageDetail)
            writer.writeObjectValueFromMethod("initiator", teamDescriptionUpdatedEventMessageDetail.initiator as any, serializeIdentitySet);
            writer.writeStringValue("teamDescription", teamDescriptionUpdatedEventMessageDetail.teamDescription);
            writer.writeStringValue("teamId", teamDescriptionUpdatedEventMessageDetail.teamId);
}
