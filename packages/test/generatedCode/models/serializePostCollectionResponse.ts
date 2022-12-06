import {PostCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializePost} from './serializePost';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePostCollectionResponse(writer: SerializationWriter, postCollectionResponse: PostCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, postCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", postCollectionResponse.value as any, serializePost);
}
