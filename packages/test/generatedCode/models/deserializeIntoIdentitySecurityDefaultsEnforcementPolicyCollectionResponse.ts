import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoIdentitySecurityDefaultsEnforcementPolicy} from './deserializeIntoIdentitySecurityDefaultsEnforcementPolicy';
import {IdentitySecurityDefaultsEnforcementPolicyCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIdentitySecurityDefaultsEnforcementPolicyCollectionResponse(identitySecurityDefaultsEnforcementPolicyCollectionResponse: IdentitySecurityDefaultsEnforcementPolicyCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(identitySecurityDefaultsEnforcementPolicyCollectionResponse),
        "value": n => { identitySecurityDefaultsEnforcementPolicyCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoIdentitySecurityDefaultsEnforcementPolicy) as any ; },
    }
}
