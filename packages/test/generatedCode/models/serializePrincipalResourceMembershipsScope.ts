import {PrincipalResourceMembershipsScope} from './index';
import {serializeAccessReviewScope} from './serializeAccessReviewScope';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrincipalResourceMembershipsScope(writer: SerializationWriter, principalResourceMembershipsScope: PrincipalResourceMembershipsScope | undefined = {}) : void {
        serializeAccessReviewScope(writer, principalResourceMembershipsScope)
            writer.writeCollectionOfObjectValuesFromMethod("principalScopes", principalResourceMembershipsScope.principalScopes as any, serializeAccessReviewScope);
            writer.writeCollectionOfObjectValuesFromMethod("resourceScopes", principalResourceMembershipsScope.resourceScopes as any, serializeAccessReviewScope);
}
