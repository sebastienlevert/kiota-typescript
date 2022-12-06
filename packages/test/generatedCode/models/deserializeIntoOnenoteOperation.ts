import {deserializeIntoOnenoteOperationError} from './deserializeIntoOnenoteOperationError';
import {deserializeIntoOperation} from './deserializeIntoOperation';
import {OnenoteOperation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOnenoteOperation(onenoteOperation: OnenoteOperation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoOperation(onenoteOperation),
        "error": n => { onenoteOperation.error_escaped = n.getObject(deserializeIntoOnenoteOperationError) as any ; },
        "percentComplete": n => { onenoteOperation.percentComplete = n.getStringValue() as any ; },
        "resourceId": n => { onenoteOperation.resourceId = n.getStringValue() as any ; },
        "resourceLocation": n => { onenoteOperation.resourceLocation = n.getStringValue() as any ; },
    }
}
