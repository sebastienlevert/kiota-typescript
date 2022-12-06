import {UnarchivePostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnarchivePostRequestBody(unarchivePostRequestBody: UnarchivePostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "messageIds": n => { unarchivePostRequestBody.messageIds = n.getCollectionOfPrimitiveValues<string>() as any ; },
    }
}
