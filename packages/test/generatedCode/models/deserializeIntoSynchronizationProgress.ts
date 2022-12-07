import {SynchronizationProgress} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSynchronizationProgress(synchronizationProgress: SynchronizationProgress | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "completedUnits": n => { synchronizationProgress.completedUnits = n.getNumberValue() as any ; },
        "progressObservationDateTime": n => { synchronizationProgress.progressObservationDateTime = n.getDateValue() as any ; },
        "totalUnits": n => { synchronizationProgress.totalUnits = n.getNumberValue() as any ; },
        "units": n => { synchronizationProgress.units = n.getStringValue() as any ; },
    }
}
