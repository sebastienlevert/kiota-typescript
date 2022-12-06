import {IosManagedAppProtectionCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeIosManagedAppProtection} from './serializeIosManagedAppProtection';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosManagedAppProtectionCollectionResponse(writer: SerializationWriter, iosManagedAppProtectionCollectionResponse: IosManagedAppProtectionCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, iosManagedAppProtectionCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", iosManagedAppProtectionCollectionResponse.value as any, serializeIosManagedAppProtection);
}
