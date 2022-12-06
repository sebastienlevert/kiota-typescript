import {AcceptPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAcceptPostRequestBody(acceptPostRequestBody: AcceptPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "comment": n => { acceptPostRequestBody.comment = n.getStringValue() as any ; },
        "sendResponse": n => { acceptPostRequestBody.sendResponse = n.getBooleanValue() as any ; },
    }
}
