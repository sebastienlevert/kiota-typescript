import {SearchHitCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSearchHit} from './serializeSearchHit';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSearchHitCollectionResponse(writer: SerializationWriter, searchHitCollectionResponse: SearchHitCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, searchHitCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", searchHitCollectionResponse.value as any, serializeSearchHit);
}
