import {deserializeIntoMessage} from '../../../../../../../../models/deserializeIntoMessage';
import {ReplyAllPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoReplyAllPostRequestBody(replyAllPostRequestBody: ReplyAllPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "comment": n => { replyAllPostRequestBody.comment = n.getStringValue() as any ; },
        "message": n => { replyAllPostRequestBody.message = n.getObject(deserializeIntoMessage) as any ; },
    }
}
