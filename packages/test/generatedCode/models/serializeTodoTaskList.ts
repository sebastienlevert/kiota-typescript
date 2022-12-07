import {TodoTaskList} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeExtension} from './serializeExtension';
import {serializeTodoTask} from './serializeTodoTask';
import {WellknownListName} from './wellknownListName';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTodoTaskList(writer: SerializationWriter, todoTaskList: TodoTaskList | undefined = {}) : void {
        serializeEntity(writer, todoTaskList)
            writer.writeStringValue("displayName", todoTaskList.displayName);
            writer.writeCollectionOfObjectValuesFromMethod("extensions", todoTaskList.extensions as any, serializeExtension);
            writer.writeBooleanValue("isOwner", todoTaskList.isOwner);
            writer.writeBooleanValue("isShared", todoTaskList.isShared);
            writer.writeCollectionOfObjectValuesFromMethod("tasks", todoTaskList.tasks as any, serializeTodoTask);
            writer.writeEnumValue<WellknownListName>("wellknownListName", todoTaskList.wellknownListName);
}
