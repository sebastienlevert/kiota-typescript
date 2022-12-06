import {TeamMembersNotificationRecipient} from './index';
import {serializeTeamworkNotificationRecipient} from './serializeTeamworkNotificationRecipient';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamMembersNotificationRecipient(writer: SerializationWriter, teamMembersNotificationRecipient: TeamMembersNotificationRecipient | undefined = {}) : void {
        serializeTeamworkNotificationRecipient(writer, teamMembersNotificationRecipient)
            writer.writeStringValue("teamId", teamMembersNotificationRecipient.teamId);
}
