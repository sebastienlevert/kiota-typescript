import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoSimulationAutomation} from './deserializeIntoSimulationAutomation';
import {SimulationAutomationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSimulationAutomationCollectionResponse(simulationAutomationCollectionResponse: SimulationAutomationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(simulationAutomationCollectionResponse),
        "value": n => { simulationAutomationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSimulationAutomation) as any ; },
    }
}
