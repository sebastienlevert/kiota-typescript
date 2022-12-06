import {ItemActivityStatCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeItemActivityStat} from './serializeItemActivityStat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeItemActivityStatCollectionResponse(writer: SerializationWriter, itemActivityStatCollectionResponse: ItemActivityStatCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, itemActivityStatCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", itemActivityStatCollectionResponse.value as any, serializeItemActivityStat);
}
