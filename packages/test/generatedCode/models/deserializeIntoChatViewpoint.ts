import {ChatViewpoint} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChatViewpoint(chatViewpoint: ChatViewpoint | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "isHidden": n => { chatViewpoint.isHidden = n.getBooleanValue() as any ; },
        "lastMessageReadDateTime": n => { chatViewpoint.lastMessageReadDateTime = n.getDateValue() as any ; },
    }
}
