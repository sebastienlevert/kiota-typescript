import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoResourceAction} from './deserializeIntoResourceAction';
import {ResourceActionCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoResourceActionCollectionResponse(resourceActionCollectionResponse: ResourceActionCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(resourceActionCollectionResponse),
        "value": n => { resourceActionCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoResourceAction) as any ; },
    }
}
