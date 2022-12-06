import {ColumnLinkCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeColumnLink} from './serializeColumnLink';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeColumnLinkCollectionResponse(writer: SerializationWriter, columnLinkCollectionResponse: ColumnLinkCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, columnLinkCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", columnLinkCollectionResponse.value as any, serializeColumnLink);
}
