import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoEmailAuthenticationMethodConfiguration} from './deserializeIntoEmailAuthenticationMethodConfiguration';
import {EmailAuthenticationMethodConfigurationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEmailAuthenticationMethodConfigurationCollectionResponse(emailAuthenticationMethodConfigurationCollectionResponse: EmailAuthenticationMethodConfigurationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(emailAuthenticationMethodConfigurationCollectionResponse),
        "value": n => { emailAuthenticationMethodConfigurationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEmailAuthenticationMethodConfiguration) as any ; },
    }
}
