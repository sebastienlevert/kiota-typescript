import {deserializeIntoTeamworkHostedContent} from './deserializeIntoTeamworkHostedContent';
import {ChatMessageHostedContent} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChatMessageHostedContent(chatMessageHostedContent: ChatMessageHostedContent | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoTeamworkHostedContent(chatMessageHostedContent),
    }
}
