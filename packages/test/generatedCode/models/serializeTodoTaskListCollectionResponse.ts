import {TodoTaskListCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeTodoTaskList} from './serializeTodoTaskList';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTodoTaskListCollectionResponse(writer: SerializationWriter, todoTaskListCollectionResponse: TodoTaskListCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, todoTaskListCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", todoTaskListCollectionResponse.value as any, serializeTodoTaskList);
}
