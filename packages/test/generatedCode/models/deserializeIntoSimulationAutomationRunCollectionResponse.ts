import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoSimulationAutomationRun} from './deserializeIntoSimulationAutomationRun';
import {SimulationAutomationRunCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSimulationAutomationRunCollectionResponse(simulationAutomationRunCollectionResponse: SimulationAutomationRunCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(simulationAutomationRunCollectionResponse),
        "value": n => { simulationAutomationRunCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSimulationAutomationRun) as any ; },
    }
}
