import {TeamworkNotificationRecipient} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamworkNotificationRecipient(writer: SerializationWriter, teamworkNotificationRecipient: TeamworkNotificationRecipient | undefined = {}) : void {
            writer.writeStringValue("@odata.type", teamworkNotificationRecipient.odataType);
}
