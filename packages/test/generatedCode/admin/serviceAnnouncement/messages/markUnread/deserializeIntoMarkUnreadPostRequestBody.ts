import {MarkUnreadPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMarkUnreadPostRequestBody(markUnreadPostRequestBody: MarkUnreadPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "messageIds": n => { markUnreadPostRequestBody.messageIds = n.getCollectionOfPrimitiveValues<string>() as any ; },
    }
}
