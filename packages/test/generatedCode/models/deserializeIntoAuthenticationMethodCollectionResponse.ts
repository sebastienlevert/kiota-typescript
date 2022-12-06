import {deserializeIntoAuthenticationMethod} from './deserializeIntoAuthenticationMethod';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AuthenticationMethodCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAuthenticationMethodCollectionResponse(authenticationMethodCollectionResponse: AuthenticationMethodCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(authenticationMethodCollectionResponse),
        "value": n => { authenticationMethodCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAuthenticationMethod) as any ; },
    }
}
