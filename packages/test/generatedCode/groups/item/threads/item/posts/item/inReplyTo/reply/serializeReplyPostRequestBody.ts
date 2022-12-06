import {serializePost} from '../../../../../../../../models/serializePost';
import {ReplyPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeReplyPostRequestBody(writer: SerializationWriter, replyPostRequestBody: ReplyPostRequestBody | undefined = {}) : void {
            writer.writeObjectValueFromMethod("post", replyPostRequestBody.post as any, serializePost);
}
