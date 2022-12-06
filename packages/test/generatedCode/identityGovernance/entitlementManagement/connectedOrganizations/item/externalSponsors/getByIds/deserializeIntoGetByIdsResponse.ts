import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoDirectoryObject} from '../../../../../../models/deserializeIntoDirectoryObject';
import {GetByIdsResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetByIdsResponse(getByIdsResponse: GetByIdsResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getByIdsResponse),
        "value": n => { getByIdsResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDirectoryObject) as any ; },
    }
}
