import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoManagedAppPolicy} from './deserializeIntoManagedAppPolicy';
import {ManagedAppPolicyCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedAppPolicyCollectionResponse(managedAppPolicyCollectionResponse: ManagedAppPolicyCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(managedAppPolicyCollectionResponse),
        "value": n => { managedAppPolicyCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoManagedAppPolicy) as any ; },
    }
}
