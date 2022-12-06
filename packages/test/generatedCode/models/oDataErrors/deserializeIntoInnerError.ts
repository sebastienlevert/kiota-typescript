import {InnerError} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoInnerError(innerError: InnerError | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "client-request-id": n => { innerError.clientRequestId = n.getStringValue() as any ; },
        "date": n => { innerError.date = n.getDateValue() as any ; },
        "@odata.type": n => { innerError.odataType = n.getStringValue() as any ; },
        "request-id": n => { innerError.requestId = n.getStringValue() as any ; },
    }
}
