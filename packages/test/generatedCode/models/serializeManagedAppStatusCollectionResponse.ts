import {ManagedAppStatusCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeManagedAppStatus} from './serializeManagedAppStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedAppStatusCollectionResponse(writer: SerializationWriter, managedAppStatusCollectionResponse: ManagedAppStatusCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, managedAppStatusCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", managedAppStatusCollectionResponse.value as any, serializeManagedAppStatus);
}
