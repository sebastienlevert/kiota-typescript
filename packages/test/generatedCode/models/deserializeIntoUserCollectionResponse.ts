import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoUser} from './deserializeIntoUser';
import {UserCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserCollectionResponse(userCollectionResponse: UserCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(userCollectionResponse),
        "value": n => { userCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUser) as any ; },
    }
}
