import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoEmailAuthenticationMethod} from './deserializeIntoEmailAuthenticationMethod';
import {EmailAuthenticationMethodCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEmailAuthenticationMethodCollectionResponse(emailAuthenticationMethodCollectionResponse: EmailAuthenticationMethodCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(emailAuthenticationMethodCollectionResponse),
        "value": n => { emailAuthenticationMethodCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEmailAuthenticationMethod) as any ; },
    }
}
