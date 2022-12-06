import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {EdiscoveryPurgeDataOperationCollectionResponse} from './index';
import {serializeEdiscoveryPurgeDataOperation} from './serializeEdiscoveryPurgeDataOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdiscoveryPurgeDataOperationCollectionResponse(writer: SerializationWriter, ediscoveryPurgeDataOperationCollectionResponse: EdiscoveryPurgeDataOperationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, ediscoveryPurgeDataOperationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", ediscoveryPurgeDataOperationCollectionResponse.value as any, serializeEdiscoveryPurgeDataOperation);
}
