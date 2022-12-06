import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoFido2AuthenticationMethodConfiguration} from './deserializeIntoFido2AuthenticationMethodConfiguration';
import {Fido2AuthenticationMethodConfigurationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFido2AuthenticationMethodConfigurationCollectionResponse(fido2AuthenticationMethodConfigurationCollectionResponse: Fido2AuthenticationMethodConfigurationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(fido2AuthenticationMethodConfigurationCollectionResponse),
        "value": n => { fido2AuthenticationMethodConfigurationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoFido2AuthenticationMethodConfiguration) as any ; },
    }
}
