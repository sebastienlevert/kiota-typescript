import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoScopedRoleMembership} from './deserializeIntoScopedRoleMembership';
import {ScopedRoleMembershipCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoScopedRoleMembershipCollectionResponse(scopedRoleMembershipCollectionResponse: ScopedRoleMembershipCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(scopedRoleMembershipCollectionResponse),
        "value": n => { scopedRoleMembershipCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoScopedRoleMembership) as any ; },
    }
}
