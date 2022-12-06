import {SubscribeToToneOperationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSubscribeToToneOperation} from './serializeSubscribeToToneOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSubscribeToToneOperationCollectionResponse(writer: SerializationWriter, subscribeToToneOperationCollectionResponse: SubscribeToToneOperationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, subscribeToToneOperationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", subscribeToToneOperationCollectionResponse.value as any, serializeSubscribeToToneOperation);
}
