import {AuthorizationPolicyCollectionResponse} from './index';
import {serializeAuthorizationPolicy} from './serializeAuthorizationPolicy';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAuthorizationPolicyCollectionResponse(writer: SerializationWriter, authorizationPolicyCollectionResponse: AuthorizationPolicyCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, authorizationPolicyCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", authorizationPolicyCollectionResponse.value as any, serializeAuthorizationPolicy);
}
