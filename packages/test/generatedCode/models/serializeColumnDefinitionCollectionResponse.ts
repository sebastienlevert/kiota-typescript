import {ColumnDefinitionCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeColumnDefinition} from './serializeColumnDefinition';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeColumnDefinitionCollectionResponse(writer: SerializationWriter, columnDefinitionCollectionResponse: ColumnDefinitionCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, columnDefinitionCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", columnDefinitionCollectionResponse.value as any, serializeColumnDefinition);
}
