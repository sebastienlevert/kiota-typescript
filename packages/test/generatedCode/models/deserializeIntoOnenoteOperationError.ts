import {OnenoteOperationError} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOnenoteOperationError(onenoteOperationError: OnenoteOperationError | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "code": n => { onenoteOperationError.code = n.getStringValue() as any ; },
        "message": n => { onenoteOperationError.message = n.getStringValue() as any ; },
    }
}
