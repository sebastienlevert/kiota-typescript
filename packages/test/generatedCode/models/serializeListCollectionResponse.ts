import {ListCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeList} from './serializeList';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeListCollectionResponse(writer: SerializationWriter, listCollectionResponse: ListCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, listCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", listCollectionResponse.value as any, serializeList);
}
