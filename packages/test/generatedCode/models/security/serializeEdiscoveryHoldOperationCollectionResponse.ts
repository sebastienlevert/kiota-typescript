import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {EdiscoveryHoldOperationCollectionResponse} from './index';
import {serializeEdiscoveryHoldOperation} from './serializeEdiscoveryHoldOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdiscoveryHoldOperationCollectionResponse(writer: SerializationWriter, ediscoveryHoldOperationCollectionResponse: EdiscoveryHoldOperationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, ediscoveryHoldOperationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", ediscoveryHoldOperationCollectionResponse.value as any, serializeEdiscoveryHoldOperation);
}
