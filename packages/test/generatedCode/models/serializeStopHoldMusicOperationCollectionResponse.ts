import {StopHoldMusicOperationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeStopHoldMusicOperation} from './serializeStopHoldMusicOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeStopHoldMusicOperationCollectionResponse(writer: SerializationWriter, stopHoldMusicOperationCollectionResponse: StopHoldMusicOperationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, stopHoldMusicOperationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", stopHoldMusicOperationCollectionResponse.value as any, serializeStopHoldMusicOperation);
}
