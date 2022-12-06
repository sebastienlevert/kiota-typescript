import {BaseItemCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeBaseItem} from './serializeBaseItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBaseItemCollectionResponse(writer: SerializationWriter, baseItemCollectionResponse: BaseItemCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, baseItemCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", baseItemCollectionResponse.value as any, serializeBaseItem);
}
