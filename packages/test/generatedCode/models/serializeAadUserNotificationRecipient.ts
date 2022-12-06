import {AadUserNotificationRecipient} from './index';
import {serializeTeamworkNotificationRecipient} from './serializeTeamworkNotificationRecipient';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAadUserNotificationRecipient(writer: SerializationWriter, aadUserNotificationRecipient: AadUserNotificationRecipient | undefined = {}) : void {
        serializeTeamworkNotificationRecipient(writer, aadUserNotificationRecipient)
            writer.writeStringValue("userId", aadUserNotificationRecipient.userId);
}
