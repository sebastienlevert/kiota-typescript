import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoMicrosoftAuthenticatorAuthenticationMethodConfiguration} from './deserializeIntoMicrosoftAuthenticatorAuthenticationMethodConfiguration';
import {MicrosoftAuthenticatorAuthenticationMethodConfigurationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMicrosoftAuthenticatorAuthenticationMethodConfigurationCollectionResponse(microsoftAuthenticatorAuthenticationMethodConfigurationCollectionResponse: MicrosoftAuthenticatorAuthenticationMethodConfigurationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(microsoftAuthenticatorAuthenticationMethodConfigurationCollectionResponse),
        "value": n => { microsoftAuthenticatorAuthenticationMethodConfigurationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMicrosoftAuthenticatorAuthenticationMethodConfiguration) as any ; },
    }
}
