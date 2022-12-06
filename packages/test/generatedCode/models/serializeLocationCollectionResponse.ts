import {LocationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeLocation} from './serializeLocation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLocationCollectionResponse(writer: SerializationWriter, locationCollectionResponse: LocationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, locationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", locationCollectionResponse.value as any, serializeLocation);
}
