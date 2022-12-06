import {PlaceCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializePlace} from './serializePlace';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePlaceCollectionResponse(writer: SerializationWriter, placeCollectionResponse: PlaceCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, placeCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", placeCollectionResponse.value as any, serializePlace);
}
