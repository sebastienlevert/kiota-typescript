import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoResourceAccess} from './deserializeIntoResourceAccess';
import {ResourceAccessCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoResourceAccessCollectionResponse(resourceAccessCollectionResponse: ResourceAccessCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(resourceAccessCollectionResponse),
        "value": n => { resourceAccessCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoResourceAccess) as any ; },
    }
}
