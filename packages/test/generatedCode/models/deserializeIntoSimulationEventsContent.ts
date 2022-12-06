import {deserializeIntoSimulationEvent} from './deserializeIntoSimulationEvent';
import {SimulationEventsContent} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSimulationEventsContent(simulationEventsContent: SimulationEventsContent | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "compromisedRate": n => { simulationEventsContent.compromisedRate = n.getNumberValue() as any ; },
        "events": n => { simulationEventsContent.events = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSimulationEvent) as any ; },
        "@odata.type": n => { simulationEventsContent.odataType = n.getStringValue() as any ; },
    }
}
