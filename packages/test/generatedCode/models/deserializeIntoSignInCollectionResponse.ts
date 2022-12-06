import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoSignIn} from './deserializeIntoSignIn';
import {SignInCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSignInCollectionResponse(signInCollectionResponse: SignInCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(signInCollectionResponse),
        "value": n => { signInCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSignIn) as any ; },
    }
}
