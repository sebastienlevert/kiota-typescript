import {deserializeIntoAppListItem} from './deserializeIntoAppListItem';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AppListItemCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAppListItemCollectionResponse(appListItemCollectionResponse: AppListItemCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(appListItemCollectionResponse),
        "value": n => { appListItemCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAppListItem) as any ; },
    }
}
