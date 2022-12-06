import {UserAttributeValuesItemCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUserAttributeValuesItem} from './serializeUserAttributeValuesItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserAttributeValuesItemCollectionResponse(writer: SerializationWriter, userAttributeValuesItemCollectionResponse: UserAttributeValuesItemCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, userAttributeValuesItemCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", userAttributeValuesItemCollectionResponse.value as any, serializeUserAttributeValuesItem);
}
