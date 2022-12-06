import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoTemporaryAccessPassAuthenticationMethodConfiguration} from './deserializeIntoTemporaryAccessPassAuthenticationMethodConfiguration';
import {TemporaryAccessPassAuthenticationMethodConfigurationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTemporaryAccessPassAuthenticationMethodConfigurationCollectionResponse(temporaryAccessPassAuthenticationMethodConfigurationCollectionResponse: TemporaryAccessPassAuthenticationMethodConfigurationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(temporaryAccessPassAuthenticationMethodConfigurationCollectionResponse),
        "value": n => { temporaryAccessPassAuthenticationMethodConfigurationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTemporaryAccessPassAuthenticationMethodConfiguration) as any ; },
    }
}
