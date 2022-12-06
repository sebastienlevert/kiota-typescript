import {serializeMessage} from '../../../../../models/serializeMessage';
import {ReplyAllPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeReplyAllPostRequestBody(writer: SerializationWriter, replyAllPostRequestBody: ReplyAllPostRequestBody | undefined = {}) : void {
            writer.writeStringValue("comment", replyAllPostRequestBody.comment);
            writer.writeObjectValueFromMethod("message", replyAllPostRequestBody.message as any, serializeMessage);
}
