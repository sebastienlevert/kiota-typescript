import {deserializeIntoAutomaticRepliesMailTips} from './deserializeIntoAutomaticRepliesMailTips';
import {deserializeIntoEmailAddress} from './deserializeIntoEmailAddress';
import {deserializeIntoMailTipsError} from './deserializeIntoMailTipsError';
import {deserializeIntoRecipient} from './deserializeIntoRecipient';
import {MailTips} from './index';
import {RecipientScopeType} from './recipientScopeType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMailTips(mailTips: MailTips | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "automaticReplies": n => { mailTips.automaticReplies = n.getObject(deserializeIntoAutomaticRepliesMailTips) as any ; },
        "customMailTip": n => { mailTips.customMailTip = n.getStringValue() as any ; },
        "deliveryRestricted": n => { mailTips.deliveryRestricted = n.getBooleanValue() as any ; },
        "emailAddress": n => { mailTips.emailAddress = n.getObject(deserializeIntoEmailAddress) as any ; },
        "error": n => { mailTips.error_escaped = n.getObject(deserializeIntoMailTipsError) as any ; },
        "externalMemberCount": n => { mailTips.externalMemberCount = n.getNumberValue() as any ; },
        "isModerated": n => { mailTips.isModerated = n.getBooleanValue() as any ; },
        "mailboxFull": n => { mailTips.mailboxFull = n.getBooleanValue() as any ; },
        "maxMessageSize": n => { mailTips.maxMessageSize = n.getNumberValue() as any ; },
        "@odata.type": n => { mailTips.odataType = n.getStringValue() as any ; },
        "recipientScope": n => { mailTips.recipientScope = n.getEnumValue<RecipientScopeType>(RecipientScopeType) as any ; },
        "recipientSuggestions": n => { mailTips.recipientSuggestions = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRecipient) as any ; },
        "totalMemberCount": n => { mailTips.totalMemberCount = n.getNumberValue() as any ; },
    }
}
