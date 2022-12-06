import {ResourceOperationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeResourceOperation} from './serializeResourceOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeResourceOperationCollectionResponse(writer: SerializationWriter, resourceOperationCollectionResponse: ResourceOperationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, resourceOperationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", resourceOperationCollectionResponse.value as any, serializeResourceOperation);
}
