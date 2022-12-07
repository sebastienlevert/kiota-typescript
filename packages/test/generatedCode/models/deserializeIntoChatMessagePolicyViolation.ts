import {ChatMessagePolicyViolationDlpActionTypes} from './chatMessagePolicyViolationDlpActionTypes';
import {ChatMessagePolicyViolationUserActionTypes} from './chatMessagePolicyViolationUserActionTypes';
import {ChatMessagePolicyViolationVerdictDetailsTypes} from './chatMessagePolicyViolationVerdictDetailsTypes';
import {deserializeIntoChatMessagePolicyViolationPolicyTip} from './deserializeIntoChatMessagePolicyViolationPolicyTip';
import {ChatMessagePolicyViolation} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChatMessagePolicyViolation(chatMessagePolicyViolation: ChatMessagePolicyViolation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "dlpAction": n => { chatMessagePolicyViolation.dlpAction = n.getEnumValue<ChatMessagePolicyViolationDlpActionTypes>(ChatMessagePolicyViolationDlpActionTypes) as any ; },
        "justificationText": n => { chatMessagePolicyViolation.justificationText = n.getStringValue() as any ; },
        "policyTip": n => { chatMessagePolicyViolation.policyTip = n.getObject(deserializeIntoChatMessagePolicyViolationPolicyTip) as any ; },
        "userAction": n => { chatMessagePolicyViolation.userAction = n.getEnumValue<ChatMessagePolicyViolationUserActionTypes>(ChatMessagePolicyViolationUserActionTypes) as any ; },
        "verdictDetails": n => { chatMessagePolicyViolation.verdictDetails = n.getEnumValue<ChatMessagePolicyViolationVerdictDetailsTypes>(ChatMessagePolicyViolationVerdictDetailsTypes) as any ; },
    }
}
