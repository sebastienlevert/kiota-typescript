import {SimulationEvent} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSimulationEvent(writer: SerializationWriter, simulationEvent: SimulationEvent | undefined = {}) : void {
            writer.writeNumberValue("count", simulationEvent.count);
            writer.writeStringValue("eventName", simulationEvent.eventName);
            writer.writeStringValue("@odata.type", simulationEvent.odataType);
}
