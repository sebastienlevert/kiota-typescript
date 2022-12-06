import {ManagedAppProtectionCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeManagedAppProtection} from './serializeManagedAppProtection';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedAppProtectionCollectionResponse(writer: SerializationWriter, managedAppProtectionCollectionResponse: ManagedAppProtectionCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, managedAppProtectionCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", managedAppProtectionCollectionResponse.value as any, serializeManagedAppProtection);
}
