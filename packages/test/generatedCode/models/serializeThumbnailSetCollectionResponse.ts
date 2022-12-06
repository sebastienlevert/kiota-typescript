import {ThumbnailSetCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeThumbnailSet} from './serializeThumbnailSet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeThumbnailSetCollectionResponse(writer: SerializationWriter, thumbnailSetCollectionResponse: ThumbnailSetCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, thumbnailSetCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", thumbnailSetCollectionResponse.value as any, serializeThumbnailSet);
}
