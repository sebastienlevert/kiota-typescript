import {AndroidManagedAppProtectionCollectionResponse} from './index';
import {serializeAndroidManagedAppProtection} from './serializeAndroidManagedAppProtection';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAndroidManagedAppProtectionCollectionResponse(writer: SerializationWriter, androidManagedAppProtectionCollectionResponse: AndroidManagedAppProtectionCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, androidManagedAppProtectionCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", androidManagedAppProtectionCollectionResponse.value as any, serializeAndroidManagedAppProtection);
}
