import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoManagedAppPolicy} from '../../models/deserializeIntoManagedAppPolicy';
import {GetManagedAppPoliciesResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetManagedAppPoliciesResponse(getManagedAppPoliciesResponse: GetManagedAppPoliciesResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getManagedAppPoliciesResponse),
        "value": n => { getManagedAppPoliciesResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoManagedAppPolicy) as any ; },
    }
}
