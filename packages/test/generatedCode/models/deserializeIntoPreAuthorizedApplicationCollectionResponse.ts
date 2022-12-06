import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoPreAuthorizedApplication} from './deserializeIntoPreAuthorizedApplication';
import {PreAuthorizedApplicationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPreAuthorizedApplicationCollectionResponse(preAuthorizedApplicationCollectionResponse: PreAuthorizedApplicationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(preAuthorizedApplicationCollectionResponse),
        "value": n => { preAuthorizedApplicationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPreAuthorizedApplication) as any ; },
    }
}
