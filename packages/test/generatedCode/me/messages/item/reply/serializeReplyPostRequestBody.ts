import {serializeMessage} from '../../../../models/serializeMessage';
import {ReplyPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeReplyPostRequestBody(writer: SerializationWriter, replyPostRequestBody: ReplyPostRequestBody | undefined = {}) : void {
            writer.writeStringValue("comment", replyPostRequestBody.comment);
            writer.writeObjectValueFromMethod("message", replyPostRequestBody.message as any, serializeMessage);
}
