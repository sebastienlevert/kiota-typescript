import {OperationError} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOperationError(operationError: OperationError | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "code": n => { operationError.code = n.getStringValue() as any ; },
        "message": n => { operationError.message = n.getStringValue() as any ; },
    }
}
