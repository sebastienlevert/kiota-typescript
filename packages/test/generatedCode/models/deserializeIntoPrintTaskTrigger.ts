import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoPrintTaskDefinition} from './deserializeIntoPrintTaskDefinition';
import {PrintTaskTrigger} from './index';
import {PrintEvent} from './printEvent';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintTaskTrigger(printTaskTrigger: PrintTaskTrigger | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(printTaskTrigger),
        "definition": n => { printTaskTrigger.definition = n.getObject(deserializeIntoPrintTaskDefinition) as any ; },
        "event": n => { printTaskTrigger.event = n.getEnumValue<PrintEvent>(PrintEvent) as any ; },
    }
}
