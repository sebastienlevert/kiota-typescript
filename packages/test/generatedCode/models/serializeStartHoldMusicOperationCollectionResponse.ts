import {StartHoldMusicOperationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeStartHoldMusicOperation} from './serializeStartHoldMusicOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeStartHoldMusicOperationCollectionResponse(writer: SerializationWriter, startHoldMusicOperationCollectionResponse: StartHoldMusicOperationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, startHoldMusicOperationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", startHoldMusicOperationCollectionResponse.value as any, serializeStartHoldMusicOperation);
}
