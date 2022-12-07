import {ChatMessagePolicyViolationPolicyTip} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChatMessagePolicyViolationPolicyTip(chatMessagePolicyViolationPolicyTip: ChatMessagePolicyViolationPolicyTip | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "complianceUrl": n => { chatMessagePolicyViolationPolicyTip.complianceUrl = n.getStringValue() as any ; },
        "generalText": n => { chatMessagePolicyViolationPolicyTip.generalText = n.getStringValue() as any ; },
        "matchedConditionDescriptions": n => { chatMessagePolicyViolationPolicyTip.matchedConditionDescriptions = n.getCollectionOfPrimitiveValues<string>() as any ; },
    }
}
