import {Todo} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeTodoTaskList} from './serializeTodoTaskList';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTodo(writer: SerializationWriter, todo: Todo | undefined = {}) : void {
        serializeEntity(writer, todo)
            writer.writeCollectionOfObjectValuesFromMethod("lists", todo.lists as any, serializeTodoTaskList);
}
