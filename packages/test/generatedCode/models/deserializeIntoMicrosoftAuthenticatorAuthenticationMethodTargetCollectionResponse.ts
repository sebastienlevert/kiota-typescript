import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoMicrosoftAuthenticatorAuthenticationMethodTarget} from './deserializeIntoMicrosoftAuthenticatorAuthenticationMethodTarget';
import {MicrosoftAuthenticatorAuthenticationMethodTargetCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMicrosoftAuthenticatorAuthenticationMethodTargetCollectionResponse(microsoftAuthenticatorAuthenticationMethodTargetCollectionResponse: MicrosoftAuthenticatorAuthenticationMethodTargetCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(microsoftAuthenticatorAuthenticationMethodTargetCollectionResponse),
        "value": n => { microsoftAuthenticatorAuthenticationMethodTargetCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMicrosoftAuthenticatorAuthenticationMethodTarget) as any ; },
    }
}
