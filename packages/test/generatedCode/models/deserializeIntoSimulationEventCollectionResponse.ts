import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoSimulationEvent} from './deserializeIntoSimulationEvent';
import {SimulationEventCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSimulationEventCollectionResponse(simulationEventCollectionResponse: SimulationEventCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(simulationEventCollectionResponse),
        "value": n => { simulationEventCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSimulationEvent) as any ; },
    }
}
