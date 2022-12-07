import {TeamMessagingSettings} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamMessagingSettings(teamMessagingSettings: TeamMessagingSettings | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "allowChannelMentions": n => { teamMessagingSettings.allowChannelMentions = n.getBooleanValue() as any ; },
        "allowOwnerDeleteMessages": n => { teamMessagingSettings.allowOwnerDeleteMessages = n.getBooleanValue() as any ; },
        "allowTeamMentions": n => { teamMessagingSettings.allowTeamMentions = n.getBooleanValue() as any ; },
        "allowUserDeleteMessages": n => { teamMessagingSettings.allowUserDeleteMessages = n.getBooleanValue() as any ; },
        "allowUserEditMessages": n => { teamMessagingSettings.allowUserEditMessages = n.getBooleanValue() as any ; },
    }
}
