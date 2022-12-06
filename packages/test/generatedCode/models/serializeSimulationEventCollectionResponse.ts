import {SimulationEventCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSimulationEvent} from './serializeSimulationEvent';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSimulationEventCollectionResponse(writer: SerializationWriter, simulationEventCollectionResponse: SimulationEventCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, simulationEventCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", simulationEventCollectionResponse.value as any, serializeSimulationEvent);
}
