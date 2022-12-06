import {SearchHitsContainerCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSearchHitsContainer} from './serializeSearchHitsContainer';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSearchHitsContainerCollectionResponse(writer: SerializationWriter, searchHitsContainerCollectionResponse: SearchHitsContainerCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, searchHitsContainerCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", searchHitsContainerCollectionResponse.value as any, serializeSearchHitsContainer);
}
