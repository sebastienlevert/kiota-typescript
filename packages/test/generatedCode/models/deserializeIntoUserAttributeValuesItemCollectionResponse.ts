import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoUserAttributeValuesItem} from './deserializeIntoUserAttributeValuesItem';
import {UserAttributeValuesItemCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserAttributeValuesItemCollectionResponse(userAttributeValuesItemCollectionResponse: UserAttributeValuesItemCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(userAttributeValuesItemCollectionResponse),
        "value": n => { userAttributeValuesItemCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUserAttributeValuesItem) as any ; },
    }
}
