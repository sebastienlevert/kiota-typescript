import {TeamArchivedEventMessageDetail} from './index';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamArchivedEventMessageDetail(writer: SerializationWriter, teamArchivedEventMessageDetail: TeamArchivedEventMessageDetail | undefined = {}) : void {
        serializeEventMessageDetail(writer, teamArchivedEventMessageDetail)
            writer.writeObjectValueFromMethod("initiator", teamArchivedEventMessageDetail.initiator as any, serializeIdentitySet);
            writer.writeStringValue("teamId", teamArchivedEventMessageDetail.teamId);
}
