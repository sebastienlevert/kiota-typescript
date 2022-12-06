import {TeamJoiningDisabledEventMessageDetail} from './index';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamJoiningDisabledEventMessageDetail(writer: SerializationWriter, teamJoiningDisabledEventMessageDetail: TeamJoiningDisabledEventMessageDetail | undefined = {}) : void {
        serializeEventMessageDetail(writer, teamJoiningDisabledEventMessageDetail)
            writer.writeObjectValueFromMethod("initiator", teamJoiningDisabledEventMessageDetail.initiator as any, serializeIdentitySet);
            writer.writeStringValue("teamId", teamJoiningDisabledEventMessageDetail.teamId);
}
