import {deserializeIntoActionResultPart} from './deserializeIntoActionResultPart';
import {AadUserConversationMemberResult} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAadUserConversationMemberResult(aadUserConversationMemberResult: AadUserConversationMemberResult | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoActionResultPart(aadUserConversationMemberResult),
        "userId": n => { aadUserConversationMemberResult.userId = n.getStringValue() as any ; },
    }
}
