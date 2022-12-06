import {LongRunningOperationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeLongRunningOperation} from './serializeLongRunningOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLongRunningOperationCollectionResponse(writer: SerializationWriter, longRunningOperationCollectionResponse: LongRunningOperationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, longRunningOperationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", longRunningOperationCollectionResponse.value as any, serializeLongRunningOperation);
}
