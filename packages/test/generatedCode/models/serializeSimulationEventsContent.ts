import {SimulationEventsContent} from './index';
import {serializeSimulationEvent} from './serializeSimulationEvent';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSimulationEventsContent(writer: SerializationWriter, simulationEventsContent: SimulationEventsContent | undefined = {}) : void {
            writer.writeNumberValue("compromisedRate", simulationEventsContent.compromisedRate);
            writer.writeCollectionOfObjectValuesFromMethod("events", simulationEventsContent.events as any, serializeSimulationEvent);
            writer.writeStringValue("@odata.type", simulationEventsContent.odataType);
}
