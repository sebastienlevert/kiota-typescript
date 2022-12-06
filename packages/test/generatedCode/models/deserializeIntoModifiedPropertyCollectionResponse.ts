import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoModifiedProperty} from './deserializeIntoModifiedProperty';
import {ModifiedPropertyCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoModifiedPropertyCollectionResponse(modifiedPropertyCollectionResponse: ModifiedPropertyCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(modifiedPropertyCollectionResponse),
        "value": n => { modifiedPropertyCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoModifiedProperty) as any ; },
    }
}
