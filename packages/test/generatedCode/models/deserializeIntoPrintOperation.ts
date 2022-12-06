import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoPrintOperationStatus} from './deserializeIntoPrintOperationStatus';
import {PrintOperation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintOperation(printOperation: PrintOperation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(printOperation),
        "createdDateTime": n => { printOperation.createdDateTime = n.getDateValue() as any ; },
        "status": n => { printOperation.status = n.getObject(deserializeIntoPrintOperationStatus) as any ; },
    }
}
