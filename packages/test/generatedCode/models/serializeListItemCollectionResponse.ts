import {ListItemCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeListItem} from './serializeListItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeListItemCollectionResponse(writer: SerializationWriter, listItemCollectionResponse: ListItemCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, listItemCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", listItemCollectionResponse.value as any, serializeListItem);
}
