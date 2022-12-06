import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoUserActivity} from './deserializeIntoUserActivity';
import {UserActivityCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserActivityCollectionResponse(userActivityCollectionResponse: UserActivityCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(userActivityCollectionResponse),
        "value": n => { userActivityCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUserActivity) as any ; },
    }
}
