import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoTodoTaskList} from './deserializeIntoTodoTaskList';
import {TodoTaskListCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTodoTaskListCollectionResponse(todoTaskListCollectionResponse: TodoTaskListCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(todoTaskListCollectionResponse),
        "value": n => { todoTaskListCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTodoTaskList) as any ; },
    }
}
