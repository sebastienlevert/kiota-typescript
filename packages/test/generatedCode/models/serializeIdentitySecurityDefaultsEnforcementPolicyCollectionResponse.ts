import {IdentitySecurityDefaultsEnforcementPolicyCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeIdentitySecurityDefaultsEnforcementPolicy} from './serializeIdentitySecurityDefaultsEnforcementPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIdentitySecurityDefaultsEnforcementPolicyCollectionResponse(writer: SerializationWriter, identitySecurityDefaultsEnforcementPolicyCollectionResponse: IdentitySecurityDefaultsEnforcementPolicyCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, identitySecurityDefaultsEnforcementPolicyCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", identitySecurityDefaultsEnforcementPolicyCollectionResponse.value as any, serializeIdentitySecurityDefaultsEnforcementPolicy);
}
