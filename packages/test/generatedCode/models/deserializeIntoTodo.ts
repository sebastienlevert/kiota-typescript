import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoTodoTaskList} from './deserializeIntoTodoTaskList';
import {Todo} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTodo(todo: Todo | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(todo),
        "lists": n => { todo.lists = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTodoTaskList) as any ; },
    }
}
