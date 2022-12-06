import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoUserSource} from './deserializeIntoUserSource';
import {UserSourceCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserSourceCollectionResponse(userSourceCollectionResponse: UserSourceCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(userSourceCollectionResponse),
        "value": n => { userSourceCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUserSource) as any ; },
    }
}
