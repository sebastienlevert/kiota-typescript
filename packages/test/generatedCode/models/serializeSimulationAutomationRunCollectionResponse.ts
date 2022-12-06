import {SimulationAutomationRunCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSimulationAutomationRun} from './serializeSimulationAutomationRun';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSimulationAutomationRunCollectionResponse(writer: SerializationWriter, simulationAutomationRunCollectionResponse: SimulationAutomationRunCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, simulationAutomationRunCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", simulationAutomationRunCollectionResponse.value as any, serializeSimulationAutomationRun);
}
