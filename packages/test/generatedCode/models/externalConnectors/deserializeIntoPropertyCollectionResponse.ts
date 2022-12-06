import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoProperty} from './deserializeIntoProperty';
import {PropertyCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPropertyCollectionResponse(propertyCollectionResponse: PropertyCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(propertyCollectionResponse),
        "value": n => { propertyCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoProperty) as any ; },
    }
}
