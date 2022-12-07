import {ChatMessagePolicyViolationDlpActionTypes} from './chatMessagePolicyViolationDlpActionTypes';
import {ChatMessagePolicyViolationUserActionTypes} from './chatMessagePolicyViolationUserActionTypes';
import {ChatMessagePolicyViolationVerdictDetailsTypes} from './chatMessagePolicyViolationVerdictDetailsTypes';
import {ChatMessagePolicyViolation} from './index';
import {serializeChatMessagePolicyViolationPolicyTip} from './serializeChatMessagePolicyViolationPolicyTip';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChatMessagePolicyViolation(writer: SerializationWriter, chatMessagePolicyViolation: ChatMessagePolicyViolation | undefined = {}) : void {
            writer.writeEnumValue<ChatMessagePolicyViolationDlpActionTypes>("dlpAction", chatMessagePolicyViolation.dlpAction);
            writer.writeStringValue("justificationText", chatMessagePolicyViolation.justificationText);
            writer.writeObjectValueFromMethod("policyTip", chatMessagePolicyViolation.policyTip as any, serializeChatMessagePolicyViolationPolicyTip);
            writer.writeEnumValue<ChatMessagePolicyViolationUserActionTypes>("userAction", chatMessagePolicyViolation.userAction);
            writer.writeEnumValue<ChatMessagePolicyViolationVerdictDetailsTypes>("verdictDetails", chatMessagePolicyViolation.verdictDetails);
}
