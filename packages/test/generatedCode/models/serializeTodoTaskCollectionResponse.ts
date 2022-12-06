import {TodoTaskCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeTodoTask} from './serializeTodoTask';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTodoTaskCollectionResponse(writer: SerializationWriter, todoTaskCollectionResponse: TodoTaskCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, todoTaskCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", todoTaskCollectionResponse.value as any, serializeTodoTask);
}
