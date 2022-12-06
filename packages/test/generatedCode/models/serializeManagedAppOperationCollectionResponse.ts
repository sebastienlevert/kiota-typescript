import {ManagedAppOperationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeManagedAppOperation} from './serializeManagedAppOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedAppOperationCollectionResponse(writer: SerializationWriter, managedAppOperationCollectionResponse: ManagedAppOperationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, managedAppOperationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", managedAppOperationCollectionResponse.value as any, serializeManagedAppOperation);
}
