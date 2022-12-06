import {deserializeIntoMessage} from '../../../../../../models/deserializeIntoMessage';
import {ReplyPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoReplyPostRequestBody(replyPostRequestBody: ReplyPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "comment": n => { replyPostRequestBody.comment = n.getStringValue() as any ; },
        "message": n => { replyPostRequestBody.message = n.getObject(deserializeIntoMessage) as any ; },
    }
}
