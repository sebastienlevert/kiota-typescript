import {deserializeIntoMessage} from '../../../../../models/deserializeIntoMessage';
import {CreateReplyPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCreateReplyPostRequestBody(createReplyPostRequestBody: CreateReplyPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "comment": n => { createReplyPostRequestBody.comment = n.getStringValue() as any ; },
        "message": n => { createReplyPostRequestBody.message = n.getObject(deserializeIntoMessage) as any ; },
    }
}
