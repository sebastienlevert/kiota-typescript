import {ApplyHoldPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoApplyHoldPostRequestBody(applyHoldPostRequestBody: ApplyHoldPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "ids": n => { applyHoldPostRequestBody.ids = n.getCollectionOfPrimitiveValues<string>() as any ; },
    }
}
