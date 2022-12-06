import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoBitlockerRecoveryKey} from './deserializeIntoBitlockerRecoveryKey';
import {BitlockerRecoveryKeyCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBitlockerRecoveryKeyCollectionResponse(bitlockerRecoveryKeyCollectionResponse: BitlockerRecoveryKeyCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(bitlockerRecoveryKeyCollectionResponse),
        "value": n => { bitlockerRecoveryKeyCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoBitlockerRecoveryKey) as any ; },
    }
}
