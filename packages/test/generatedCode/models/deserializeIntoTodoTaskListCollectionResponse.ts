import {deserializeIntoTodoTaskList} from './deserializeIntoTodoTaskList';
import {TodoTaskListCollectionResponse} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTodoTaskListCollectionResponse(todoTaskListCollectionResponse: TodoTaskListCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.nextLink": n => { todoTaskListCollectionResponse.odataNextLink = n.getStringValue() as any ; },
        "value": n => { todoTaskListCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTodoTaskList) as any ; },
    }
}
