import {SynchronizationProgress} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSynchronizationProgress(writer: SerializationWriter, synchronizationProgress: SynchronizationProgress | undefined = {}) : void {
            writer.writeNumberValue("completedUnits", synchronizationProgress.completedUnits);
            writer.writeDateValue("progressObservationDateTime", synchronizationProgress.progressObservationDateTime);
            writer.writeNumberValue("totalUnits", synchronizationProgress.totalUnits);
            writer.writeStringValue("units", synchronizationProgress.units);
}
