import {TodoTaskCollectionResponse} from './index';
import {serializeTodoTask} from './serializeTodoTask';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTodoTaskCollectionResponse(writer: SerializationWriter, todoTaskCollectionResponse: TodoTaskCollectionResponse | undefined = {}) : void {
            writer.writeStringValue("@odata.nextLink", todoTaskCollectionResponse.odataNextLink);
            writer.writeCollectionOfObjectValuesFromMethod("value", todoTaskCollectionResponse.value as any, serializeTodoTask);
}
