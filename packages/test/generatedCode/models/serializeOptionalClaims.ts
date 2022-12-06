import {OptionalClaims} from './index';
import {serializeOptionalClaim} from './serializeOptionalClaim';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOptionalClaims(writer: SerializationWriter, optionalClaims: OptionalClaims | undefined = {}) : void {
            writer.writeCollectionOfObjectValuesFromMethod("accessToken", optionalClaims.accessToken as any, serializeOptionalClaim);
            writer.writeCollectionOfObjectValuesFromMethod("idToken", optionalClaims.idToken as any, serializeOptionalClaim);
            writer.writeStringValue("@odata.type", optionalClaims.odataType);
            writer.writeCollectionOfObjectValuesFromMethod("saml2Token", optionalClaims.saml2Token as any, serializeOptionalClaim);
}
