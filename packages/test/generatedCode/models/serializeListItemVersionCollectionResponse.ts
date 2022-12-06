import {ListItemVersionCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeListItemVersion} from './serializeListItemVersion';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeListItemVersionCollectionResponse(writer: SerializationWriter, listItemVersionCollectionResponse: ListItemVersionCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, listItemVersionCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", listItemVersionCollectionResponse.value as any, serializeListItemVersion);
}
