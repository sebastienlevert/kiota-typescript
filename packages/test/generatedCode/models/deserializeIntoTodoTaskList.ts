import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoExtension} from './deserializeIntoExtension';
import {deserializeIntoTodoTask} from './deserializeIntoTodoTask';
import {TodoTaskList} from './index';
import {WellknownListName} from './wellknownListName';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTodoTaskList(todoTaskList: TodoTaskList | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(todoTaskList),
        "displayName": n => { todoTaskList.displayName = n.getStringValue() as any ; },
        "extensions": n => { todoTaskList.extensions = n.getCollectionOfObjectValuesFromMethod(deserializeIntoExtension) as any ; },
        "isOwner": n => { todoTaskList.isOwner = n.getBooleanValue() as any ; },
        "isShared": n => { todoTaskList.isShared = n.getBooleanValue() as any ; },
        "tasks": n => { todoTaskList.tasks = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTodoTask) as any ; },
        "wellknownListName": n => { todoTaskList.wellknownListName = n.getEnumValue<WellknownListName>(WellknownListName) as any ; },
    }
}
