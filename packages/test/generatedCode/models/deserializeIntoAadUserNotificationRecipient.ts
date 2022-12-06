import {deserializeIntoTeamworkNotificationRecipient} from './deserializeIntoTeamworkNotificationRecipient';
import {AadUserNotificationRecipient} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAadUserNotificationRecipient(aadUserNotificationRecipient: AadUserNotificationRecipient | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoTeamworkNotificationRecipient(aadUserNotificationRecipient),
        "userId": n => { aadUserNotificationRecipient.userId = n.getStringValue() as any ; },
    }
}
