import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {EdiscoveryTagOperationCollectionResponse} from './index';
import {serializeEdiscoveryTagOperation} from './serializeEdiscoveryTagOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdiscoveryTagOperationCollectionResponse(writer: SerializationWriter, ediscoveryTagOperationCollectionResponse: EdiscoveryTagOperationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, ediscoveryTagOperationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", ediscoveryTagOperationCollectionResponse.value as any, serializeEdiscoveryTagOperation);
}
