import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoSharedDriveItem} from './deserializeIntoSharedDriveItem';
import {SharedDriveItemCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSharedDriveItemCollectionResponse(sharedDriveItemCollectionResponse: SharedDriveItemCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(sharedDriveItemCollectionResponse),
        "value": n => { sharedDriveItemCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSharedDriveItem) as any ; },
    }
}
