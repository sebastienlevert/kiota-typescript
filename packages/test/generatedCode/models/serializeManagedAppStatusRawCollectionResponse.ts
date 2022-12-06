import {ManagedAppStatusRawCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeManagedAppStatusRaw} from './serializeManagedAppStatusRaw';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedAppStatusRawCollectionResponse(writer: SerializationWriter, managedAppStatusRawCollectionResponse: ManagedAppStatusRawCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, managedAppStatusRawCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", managedAppStatusRawCollectionResponse.value as any, serializeManagedAppStatusRaw);
}
