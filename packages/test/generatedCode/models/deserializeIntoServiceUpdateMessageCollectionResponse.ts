import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoServiceUpdateMessage} from './deserializeIntoServiceUpdateMessage';
import {ServiceUpdateMessageCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoServiceUpdateMessageCollectionResponse(serviceUpdateMessageCollectionResponse: ServiceUpdateMessageCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(serviceUpdateMessageCollectionResponse),
        "value": n => { serviceUpdateMessageCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoServiceUpdateMessage) as any ; },
    }
}
