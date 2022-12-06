import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoExternalItem} from './deserializeIntoExternalItem';
import {ExternalItemCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoExternalItemCollectionResponse(externalItemCollectionResponse: ExternalItemCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(externalItemCollectionResponse),
        "value": n => { externalItemCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoExternalItem) as any ; },
    }
}
