import {ChatMessageHostedContent} from './index';
import {serializeTeamworkHostedContent} from './serializeTeamworkHostedContent';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChatMessageHostedContent(writer: SerializationWriter, chatMessageHostedContent: ChatMessageHostedContent | undefined = {}) : void {
        serializeTeamworkHostedContent(writer, chatMessageHostedContent)
}
