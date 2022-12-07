import {deserializeIntoTodoTask} from './deserializeIntoTodoTask';
import {TodoTaskCollectionResponse} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTodoTaskCollectionResponse(todoTaskCollectionResponse: TodoTaskCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.nextLink": n => { todoTaskCollectionResponse.odataNextLink = n.getStringValue() as any ; },
        "value": n => { todoTaskCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTodoTask) as any ; },
    }
}
