import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoDriveItem} from '../../../../models/deserializeIntoDriveItem';
import {SharedWithMeResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSharedWithMeResponse(sharedWithMeResponse: SharedWithMeResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(sharedWithMeResponse),
        "value": n => { sharedWithMeResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDriveItem) as any ; },
    }
}
