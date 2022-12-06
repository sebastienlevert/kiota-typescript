import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoTargetedManagedAppProtection} from './deserializeIntoTargetedManagedAppProtection';
import {TargetedManagedAppProtectionCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTargetedManagedAppProtectionCollectionResponse(targetedManagedAppProtectionCollectionResponse: TargetedManagedAppProtectionCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(targetedManagedAppProtectionCollectionResponse),
        "value": n => { targetedManagedAppProtectionCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTargetedManagedAppProtection) as any ; },
    }
}
