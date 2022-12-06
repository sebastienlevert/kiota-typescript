import {RichLongRunningOperationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeRichLongRunningOperation} from './serializeRichLongRunningOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRichLongRunningOperationCollectionResponse(writer: SerializationWriter, richLongRunningOperationCollectionResponse: RichLongRunningOperationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, richLongRunningOperationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", richLongRunningOperationCollectionResponse.value as any, serializeRichLongRunningOperation);
}
