import {ContentTypeCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeContentType} from './serializeContentType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeContentTypeCollectionResponse(writer: SerializationWriter, contentTypeCollectionResponse: ContentTypeCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, contentTypeCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", contentTypeCollectionResponse.value as any, serializeContentType);
}
