import {PrintTask} from './index';
import {serializeEntity} from './serializeEntity';
import {serializePrintTaskDefinition} from './serializePrintTaskDefinition';
import {serializePrintTaskStatus} from './serializePrintTaskStatus';
import {serializePrintTaskTrigger} from './serializePrintTaskTrigger';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrintTask(writer: SerializationWriter, printTask: PrintTask | undefined = {}) : void {
        serializeEntity(writer, printTask)
            writer.writeObjectValueFromMethod("definition", printTask.definition as any, serializePrintTaskDefinition);
            writer.writeStringValue("parentUrl", printTask.parentUrl);
            writer.writeObjectValueFromMethod("status", printTask.status as any, serializePrintTaskStatus);
            writer.writeObjectValueFromMethod("trigger", printTask.trigger as any, serializePrintTaskTrigger);
}
