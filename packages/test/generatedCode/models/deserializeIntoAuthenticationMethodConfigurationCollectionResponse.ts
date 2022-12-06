import {deserializeIntoAuthenticationMethodConfiguration} from './deserializeIntoAuthenticationMethodConfiguration';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AuthenticationMethodConfigurationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAuthenticationMethodConfigurationCollectionResponse(authenticationMethodConfigurationCollectionResponse: AuthenticationMethodConfigurationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(authenticationMethodConfigurationCollectionResponse),
        "value": n => { authenticationMethodConfigurationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAuthenticationMethodConfiguration) as any ; },
    }
}
