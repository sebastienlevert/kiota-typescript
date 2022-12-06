import {TeamworkNotificationRecipient} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamworkNotificationRecipient(teamworkNotificationRecipient: TeamworkNotificationRecipient | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { teamworkNotificationRecipient.odataType = n.getStringValue() as any ; },
    }
}
