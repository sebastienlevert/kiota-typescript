import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {MediaCollectionResponse} from './index';
import {serializeMedia} from './serializeMedia';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMediaCollectionResponse(writer: SerializationWriter, mediaCollectionResponse: MediaCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, mediaCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", mediaCollectionResponse.value as any, serializeMedia);
}
