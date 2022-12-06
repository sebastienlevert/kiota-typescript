import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoSimulation} from './deserializeIntoSimulation';
import {SimulationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSimulationCollectionResponse(simulationCollectionResponse: SimulationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(simulationCollectionResponse),
        "value": n => { simulationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSimulation) as any ; },
    }
}
