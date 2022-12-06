import {deserializeIntoTeamworkNotificationRecipient} from './deserializeIntoTeamworkNotificationRecipient';
import {TeamMembersNotificationRecipient} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamMembersNotificationRecipient(teamMembersNotificationRecipient: TeamMembersNotificationRecipient | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoTeamworkNotificationRecipient(teamMembersNotificationRecipient),
        "teamId": n => { teamMembersNotificationRecipient.teamId = n.getStringValue() as any ; },
    }
}
