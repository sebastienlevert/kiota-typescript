import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoResultInfo} from './deserializeIntoResultInfo';
import {CommsOperation} from './index';
import {OperationStatus} from './operationStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCommsOperation(commsOperation: CommsOperation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(commsOperation),
        "clientContext": n => { commsOperation.clientContext = n.getStringValue() as any ; },
        "resultInfo": n => { commsOperation.resultInfo = n.getObject(deserializeIntoResultInfo) as any ; },
        "status": n => { commsOperation.status = n.getEnumValue<OperationStatus>(OperationStatus) as any ; },
    }
}
