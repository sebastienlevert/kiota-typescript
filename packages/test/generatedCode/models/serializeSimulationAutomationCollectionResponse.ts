import {SimulationAutomationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSimulationAutomation} from './serializeSimulationAutomation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSimulationAutomationCollectionResponse(writer: SerializationWriter, simulationAutomationCollectionResponse: SimulationAutomationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, simulationAutomationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", simulationAutomationCollectionResponse.value as any, serializeSimulationAutomation);
}
