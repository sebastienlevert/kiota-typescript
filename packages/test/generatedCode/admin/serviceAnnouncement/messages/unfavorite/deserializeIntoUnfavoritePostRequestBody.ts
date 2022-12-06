import {UnfavoritePostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnfavoritePostRequestBody(unfavoritePostRequestBody: UnfavoritePostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "messageIds": n => { unfavoritePostRequestBody.messageIds = n.getCollectionOfPrimitiveValues<string>() as any ; },
    }
}
