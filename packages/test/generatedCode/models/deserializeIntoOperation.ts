import {deserializeIntoEntity} from './deserializeIntoEntity';
import {Operation} from './index';
import {OperationStatus} from './operationStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOperation(operation: Operation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(operation),
        "createdDateTime": n => { operation.createdDateTime = n.getDateValue() as any ; },
        "lastActionDateTime": n => { operation.lastActionDateTime = n.getDateValue() as any ; },
        "status": n => { operation.status = n.getEnumValue<OperationStatus>(OperationStatus) as any ; },
    }
}
