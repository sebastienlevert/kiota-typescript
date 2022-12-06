import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {EdiscoveryEstimateOperationCollectionResponse} from './index';
import {serializeEdiscoveryEstimateOperation} from './serializeEdiscoveryEstimateOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdiscoveryEstimateOperationCollectionResponse(writer: SerializationWriter, ediscoveryEstimateOperationCollectionResponse: EdiscoveryEstimateOperationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, ediscoveryEstimateOperationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", ediscoveryEstimateOperationCollectionResponse.value as any, serializeEdiscoveryEstimateOperation);
}
