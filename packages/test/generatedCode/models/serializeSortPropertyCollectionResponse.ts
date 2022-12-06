import {SortPropertyCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSortProperty} from './serializeSortProperty';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSortPropertyCollectionResponse(writer: SerializationWriter, sortPropertyCollectionResponse: SortPropertyCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, sortPropertyCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", sortPropertyCollectionResponse.value as any, serializeSortProperty);
}
