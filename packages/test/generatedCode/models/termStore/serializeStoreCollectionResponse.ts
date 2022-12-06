import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {StoreCollectionResponse} from './index';
import {serializeStore} from './serializeStore';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeStoreCollectionResponse(writer: SerializationWriter, storeCollectionResponse: StoreCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, storeCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", storeCollectionResponse.value as any, serializeStore);
}
