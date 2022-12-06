import {deserializeIntoMessage} from '../../../../../../../models/deserializeIntoMessage';
import {CreateReplyAllPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCreateReplyAllPostRequestBody(createReplyAllPostRequestBody: CreateReplyAllPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "comment": n => { createReplyAllPostRequestBody.comment = n.getStringValue() as any ; },
        "message": n => { createReplyAllPostRequestBody.message = n.getObject(deserializeIntoMessage) as any ; },
    }
}
