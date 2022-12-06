import {SimulationEvent} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSimulationEvent(simulationEvent: SimulationEvent | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "count": n => { simulationEvent.count = n.getNumberValue() as any ; },
        "eventName": n => { simulationEvent.eventName = n.getStringValue() as any ; },
        "@odata.type": n => { simulationEvent.odataType = n.getStringValue() as any ; },
    }
}
