import {SimulationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSimulation} from './serializeSimulation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSimulationCollectionResponse(writer: SerializationWriter, simulationCollectionResponse: SimulationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, simulationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", simulationCollectionResponse.value as any, serializeSimulation);
}
