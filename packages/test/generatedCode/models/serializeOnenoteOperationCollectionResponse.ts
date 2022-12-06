import {OnenoteOperationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeOnenoteOperation} from './serializeOnenoteOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOnenoteOperationCollectionResponse(writer: SerializationWriter, onenoteOperationCollectionResponse: OnenoteOperationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, onenoteOperationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", onenoteOperationCollectionResponse.value as any, serializeOnenoteOperation);
}
