import {TodoTaskListCollectionResponse} from './index';
import {serializeTodoTaskList} from './serializeTodoTaskList';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTodoTaskListCollectionResponse(writer: SerializationWriter, todoTaskListCollectionResponse: TodoTaskListCollectionResponse | undefined = {}) : void {
            writer.writeStringValue("@odata.nextLink", todoTaskListCollectionResponse.odataNextLink);
            writer.writeCollectionOfObjectValuesFromMethod("value", todoTaskListCollectionResponse.value as any, serializeTodoTaskList);
}
