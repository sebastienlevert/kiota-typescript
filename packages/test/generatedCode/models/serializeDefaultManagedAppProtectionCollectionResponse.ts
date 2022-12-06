import {DefaultManagedAppProtectionCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDefaultManagedAppProtection} from './serializeDefaultManagedAppProtection';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDefaultManagedAppProtectionCollectionResponse(writer: SerializationWriter, defaultManagedAppProtectionCollectionResponse: DefaultManagedAppProtectionCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, defaultManagedAppProtectionCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", defaultManagedAppProtectionCollectionResponse.value as any, serializeDefaultManagedAppProtection);
}
