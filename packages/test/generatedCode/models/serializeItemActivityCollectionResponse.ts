import {ItemActivityCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeItemActivity} from './serializeItemActivity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeItemActivityCollectionResponse(writer: SerializationWriter, itemActivityCollectionResponse: ItemActivityCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, itemActivityCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", itemActivityCollectionResponse.value as any, serializeItemActivity);
}
