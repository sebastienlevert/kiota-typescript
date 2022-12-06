import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoTimeOff} from './deserializeIntoTimeOff';
import {TimeOffCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTimeOffCollectionResponse(timeOffCollectionResponse: TimeOffCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(timeOffCollectionResponse),
        "value": n => { timeOffCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTimeOff) as any ; },
    }
}
