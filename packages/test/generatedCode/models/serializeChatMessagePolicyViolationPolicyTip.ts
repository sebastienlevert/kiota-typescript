import {ChatMessagePolicyViolationPolicyTip} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChatMessagePolicyViolationPolicyTip(writer: SerializationWriter, chatMessagePolicyViolationPolicyTip: ChatMessagePolicyViolationPolicyTip | undefined = {}) : void {
            writer.writeStringValue("complianceUrl", chatMessagePolicyViolationPolicyTip.complianceUrl);
            writer.writeStringValue("generalText", chatMessagePolicyViolationPolicyTip.generalText);
            writer.writeCollectionOfPrimitiveValues<string>("matchedConditionDescriptions", chatMessagePolicyViolationPolicyTip.matchedConditionDescriptions);
}
