import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoDriveItem} from '../../../../../models/deserializeIntoDriveItem';
import {SearchWithQResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSearchWithQResponse(searchWithQResponse: SearchWithQResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(searchWithQResponse),
        "value": n => { searchWithQResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDriveItem) as any ; },
    }
}
