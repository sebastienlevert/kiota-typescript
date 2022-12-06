import {DataPolicyOperationStatus} from './dataPolicyOperationStatus';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DataPolicyOperation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDataPolicyOperation(dataPolicyOperation: DataPolicyOperation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(dataPolicyOperation),
        "completedDateTime": n => { dataPolicyOperation.completedDateTime = n.getDateValue() as any ; },
        "progress": n => { dataPolicyOperation.progress = n.getNumberValue() as any ; },
        "status": n => { dataPolicyOperation.status = n.getEnumValue<DataPolicyOperationStatus>(DataPolicyOperationStatus) as any ; },
        "storageLocation": n => { dataPolicyOperation.storageLocation = n.getStringValue() as any ; },
        "submittedDateTime": n => { dataPolicyOperation.submittedDateTime = n.getDateValue() as any ; },
        "userId": n => { dataPolicyOperation.userId = n.getStringValue() as any ; },
    }
}
