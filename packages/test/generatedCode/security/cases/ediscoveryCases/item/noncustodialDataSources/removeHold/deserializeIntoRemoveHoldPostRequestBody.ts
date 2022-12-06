import {RemoveHoldPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRemoveHoldPostRequestBody(removeHoldPostRequestBody: RemoveHoldPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "ids": n => { removeHoldPostRequestBody.ids = n.getCollectionOfPrimitiveValues<string>() as any ; },
    }
}
