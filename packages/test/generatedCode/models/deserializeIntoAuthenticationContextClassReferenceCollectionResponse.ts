import {deserializeIntoAuthenticationContextClassReference} from './deserializeIntoAuthenticationContextClassReference';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AuthenticationContextClassReferenceCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAuthenticationContextClassReferenceCollectionResponse(authenticationContextClassReferenceCollectionResponse: AuthenticationContextClassReferenceCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(authenticationContextClassReferenceCollectionResponse),
        "value": n => { authenticationContextClassReferenceCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAuthenticationContextClassReference) as any ; },
    }
}
