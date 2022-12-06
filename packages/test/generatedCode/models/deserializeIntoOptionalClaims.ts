import {deserializeIntoOptionalClaim} from './deserializeIntoOptionalClaim';
import {OptionalClaims} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOptionalClaims(optionalClaims: OptionalClaims | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "accessToken": n => { optionalClaims.accessToken = n.getCollectionOfObjectValuesFromMethod(deserializeIntoOptionalClaim) as any ; },
        "idToken": n => { optionalClaims.idToken = n.getCollectionOfObjectValuesFromMethod(deserializeIntoOptionalClaim) as any ; },
        "@odata.type": n => { optionalClaims.odataType = n.getStringValue() as any ; },
        "saml2Token": n => { optionalClaims.saml2Token = n.getCollectionOfObjectValuesFromMethod(deserializeIntoOptionalClaim) as any ; },
    }
}
