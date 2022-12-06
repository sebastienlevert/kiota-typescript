import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoServiceHealth} from './deserializeIntoServiceHealth';
import {ServiceHealthCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoServiceHealthCollectionResponse(serviceHealthCollectionResponse: ServiceHealthCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(serviceHealthCollectionResponse),
        "value": n => { serviceHealthCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoServiceHealth) as any ; },
    }
}
