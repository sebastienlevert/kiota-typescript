import {CommsOperationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeCommsOperation} from './serializeCommsOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCommsOperationCollectionResponse(writer: SerializationWriter, commsOperationCollectionResponse: CommsOperationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, commsOperationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", commsOperationCollectionResponse.value as any, serializeCommsOperation);
}
