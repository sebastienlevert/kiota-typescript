import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoColumnLink} from './deserializeIntoColumnLink';
import {ColumnLinkCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoColumnLinkCollectionResponse(columnLinkCollectionResponse: ColumnLinkCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(columnLinkCollectionResponse),
        "value": n => { columnLinkCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoColumnLink) as any ; },
    }
}
