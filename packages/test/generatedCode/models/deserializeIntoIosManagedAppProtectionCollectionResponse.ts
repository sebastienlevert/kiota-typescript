import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoIosManagedAppProtection} from './deserializeIntoIosManagedAppProtection';
import {IosManagedAppProtectionCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosManagedAppProtectionCollectionResponse(iosManagedAppProtectionCollectionResponse: IosManagedAppProtectionCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(iosManagedAppProtectionCollectionResponse),
        "value": n => { iosManagedAppProtectionCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoIosManagedAppProtection) as any ; },
    }
}
