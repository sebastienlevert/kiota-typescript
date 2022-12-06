import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoDriveItem} from '../../models/deserializeIntoDriveItem';
import {RecentResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRecentResponse(recentResponse: RecentResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(recentResponse),
        "value": n => { recentResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDriveItem) as any ; },
    }
}
