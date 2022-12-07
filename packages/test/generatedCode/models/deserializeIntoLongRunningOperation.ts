import {deserializeIntoEntity} from './deserializeIntoEntity';
import {LongRunningOperation} from './index';
import {LongRunningOperationStatus} from './longRunningOperationStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLongRunningOperation(longRunningOperation: LongRunningOperation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(longRunningOperation),
        "createdDateTime": n => { longRunningOperation.createdDateTime = n.getDateValue() as any ; },
        "lastActionDateTime": n => { longRunningOperation.lastActionDateTime = n.getDateValue() as any ; },
        "resourceLocation": n => { longRunningOperation.resourceLocation = n.getStringValue() as any ; },
        "status": n => { longRunningOperation.status = n.getEnumValue<LongRunningOperationStatus>(LongRunningOperationStatus) as any ; },
        "statusDetail": n => { longRunningOperation.statusDetail = n.getStringValue() as any ; },
    }
}
