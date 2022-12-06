import {deserializeIntoPost} from '../../../../../../../../models/deserializeIntoPost';
import {ReplyPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoReplyPostRequestBody(replyPostRequestBody: ReplyPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "post": n => { replyPostRequestBody.post = n.getObject(deserializeIntoPost) as any ; },
    }
}
