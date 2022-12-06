import {deserializeIntoAccessReviewScope} from './deserializeIntoAccessReviewScope';
import {PrincipalResourceMembershipsScope} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrincipalResourceMembershipsScope(principalResourceMembershipsScope: PrincipalResourceMembershipsScope | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAccessReviewScope(principalResourceMembershipsScope),
        "principalScopes": n => { principalResourceMembershipsScope.principalScopes = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAccessReviewScope) as any ; },
        "resourceScopes": n => { principalResourceMembershipsScope.resourceScopes = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAccessReviewScope) as any ; },
    }
}
