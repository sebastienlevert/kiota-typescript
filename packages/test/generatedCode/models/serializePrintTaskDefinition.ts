import {PrintTaskDefinition} from './index';
import {serializeAppIdentity} from './serializeAppIdentity';
import {serializeEntity} from './serializeEntity';
import {serializePrintTask} from './serializePrintTask';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrintTaskDefinition(writer: SerializationWriter, printTaskDefinition: PrintTaskDefinition | undefined = {}) : void {
        serializeEntity(writer, printTaskDefinition)
            writer.writeObjectValueFromMethod("createdBy", printTaskDefinition.createdBy as any, serializeAppIdentity);
            writer.writeStringValue("displayName", printTaskDefinition.displayName);
            writer.writeCollectionOfObjectValuesFromMethod("tasks", printTaskDefinition.tasks as any, serializePrintTask);
}
