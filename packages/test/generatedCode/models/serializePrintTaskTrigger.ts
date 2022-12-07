import {PrintTaskTrigger} from './index';
import {PrintEvent} from './printEvent';
import {serializeEntity} from './serializeEntity';
import {serializePrintTaskDefinition} from './serializePrintTaskDefinition';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrintTaskTrigger(writer: SerializationWriter, printTaskTrigger: PrintTaskTrigger | undefined = {}) : void {
        serializeEntity(writer, printTaskTrigger)
            writer.writeObjectValueFromMethod("definition", printTaskTrigger.definition as any, serializePrintTaskDefinition);
            writer.writeEnumValue<PrintEvent>("event", printTaskTrigger.event);
}
