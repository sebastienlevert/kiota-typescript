import {TeamJoiningEnabledEventMessageDetail} from './index';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamJoiningEnabledEventMessageDetail(writer: SerializationWriter, teamJoiningEnabledEventMessageDetail: TeamJoiningEnabledEventMessageDetail | undefined = {}) : void {
        serializeEventMessageDetail(writer, teamJoiningEnabledEventMessageDetail)
            writer.writeObjectValueFromMethod("initiator", teamJoiningEnabledEventMessageDetail.initiator as any, serializeIdentitySet);
            writer.writeStringValue("teamId", teamJoiningEnabledEventMessageDetail.teamId);
}
