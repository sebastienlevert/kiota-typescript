import {deserializeIntoAuthenticationMethodTarget} from './deserializeIntoAuthenticationMethodTarget';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AuthenticationMethodTargetCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAuthenticationMethodTargetCollectionResponse(authenticationMethodTargetCollectionResponse: AuthenticationMethodTargetCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(authenticationMethodTargetCollectionResponse),
        "value": n => { authenticationMethodTargetCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAuthenticationMethodTarget) as any ; },
    }
}
