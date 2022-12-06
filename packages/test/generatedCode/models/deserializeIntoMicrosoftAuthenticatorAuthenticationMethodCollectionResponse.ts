import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoMicrosoftAuthenticatorAuthenticationMethod} from './deserializeIntoMicrosoftAuthenticatorAuthenticationMethod';
import {MicrosoftAuthenticatorAuthenticationMethodCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMicrosoftAuthenticatorAuthenticationMethodCollectionResponse(microsoftAuthenticatorAuthenticationMethodCollectionResponse: MicrosoftAuthenticatorAuthenticationMethodCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(microsoftAuthenticatorAuthenticationMethodCollectionResponse),
        "value": n => { microsoftAuthenticatorAuthenticationMethodCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMicrosoftAuthenticatorAuthenticationMethod) as any ; },
    }
}
