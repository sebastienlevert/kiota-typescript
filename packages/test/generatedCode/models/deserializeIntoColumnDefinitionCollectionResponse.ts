import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoColumnDefinition} from './deserializeIntoColumnDefinition';
import {ColumnDefinitionCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoColumnDefinitionCollectionResponse(columnDefinitionCollectionResponse: ColumnDefinitionCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(columnDefinitionCollectionResponse),
        "value": n => { columnDefinitionCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoColumnDefinition) as any ; },
    }
}
