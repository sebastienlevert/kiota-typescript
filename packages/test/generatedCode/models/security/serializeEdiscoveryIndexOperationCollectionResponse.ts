import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {EdiscoveryIndexOperationCollectionResponse} from './index';
import {serializeEdiscoveryIndexOperation} from './serializeEdiscoveryIndexOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdiscoveryIndexOperationCollectionResponse(writer: SerializationWriter, ediscoveryIndexOperationCollectionResponse: EdiscoveryIndexOperationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, ediscoveryIndexOperationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", ediscoveryIndexOperationCollectionResponse.value as any, serializeEdiscoveryIndexOperation);
}
