import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoTodoTask} from './deserializeIntoTodoTask';
import {TodoTaskCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTodoTaskCollectionResponse(todoTaskCollectionResponse: TodoTaskCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(todoTaskCollectionResponse),
        "value": n => { todoTaskCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTodoTask) as any ; },
    }
}
