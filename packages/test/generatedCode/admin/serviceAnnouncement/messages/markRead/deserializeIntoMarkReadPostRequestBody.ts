import {MarkReadPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMarkReadPostRequestBody(markReadPostRequestBody: MarkReadPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "messageIds": n => { markReadPostRequestBody.messageIds = n.getCollectionOfPrimitiveValues<string>() as any ; },
    }
}
