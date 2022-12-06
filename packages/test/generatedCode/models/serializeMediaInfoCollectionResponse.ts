import {MediaInfoCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeMediaInfo} from './serializeMediaInfo';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMediaInfoCollectionResponse(writer: SerializationWriter, mediaInfoCollectionResponse: MediaInfoCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, mediaInfoCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", mediaInfoCollectionResponse.value as any, serializeMediaInfo);
}
