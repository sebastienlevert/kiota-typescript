import {CancelMediaProcessingOperationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeCancelMediaProcessingOperation} from './serializeCancelMediaProcessingOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCancelMediaProcessingOperationCollectionResponse(writer: SerializationWriter, cancelMediaProcessingOperationCollectionResponse: CancelMediaProcessingOperationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, cancelMediaProcessingOperationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", cancelMediaProcessingOperationCollectionResponse.value as any, serializeCancelMediaProcessingOperation);
}
