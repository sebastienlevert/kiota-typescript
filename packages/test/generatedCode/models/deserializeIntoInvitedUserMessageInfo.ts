import {deserializeIntoRecipient} from './deserializeIntoRecipient';
import {InvitedUserMessageInfo} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoInvitedUserMessageInfo(invitedUserMessageInfo: InvitedUserMessageInfo | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "ccRecipients": n => { invitedUserMessageInfo.ccRecipients = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRecipient) as any ; },
        "customizedMessageBody": n => { invitedUserMessageInfo.customizedMessageBody = n.getStringValue() as any ; },
        "messageLanguage": n => { invitedUserMessageInfo.messageLanguage = n.getStringValue() as any ; },
        "@odata.type": n => { invitedUserMessageInfo.odataType = n.getStringValue() as any ; },
    }
}
