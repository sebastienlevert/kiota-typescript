import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoCallRecord} from './deserializeIntoCallRecord';
import {CallRecordCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCallRecordCollectionResponse(callRecordCollectionResponse: CallRecordCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(callRecordCollectionResponse),
        "value": n => { callRecordCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoCallRecord) as any ; },
    }
}
