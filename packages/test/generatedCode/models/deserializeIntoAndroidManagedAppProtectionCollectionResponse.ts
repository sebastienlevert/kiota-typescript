import {deserializeIntoAndroidManagedAppProtection} from './deserializeIntoAndroidManagedAppProtection';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AndroidManagedAppProtectionCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAndroidManagedAppProtectionCollectionResponse(androidManagedAppProtectionCollectionResponse: AndroidManagedAppProtectionCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(androidManagedAppProtectionCollectionResponse),
        "value": n => { androidManagedAppProtectionCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAndroidManagedAppProtection) as any ; },
    }
}
