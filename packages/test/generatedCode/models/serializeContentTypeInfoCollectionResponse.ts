import {ContentTypeInfoCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeContentTypeInfo} from './serializeContentTypeInfo';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeContentTypeInfoCollectionResponse(writer: SerializationWriter, contentTypeInfoCollectionResponse: ContentTypeInfoCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, contentTypeInfoCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", contentTypeInfoCollectionResponse.value as any, serializeContentTypeInfo);
}
