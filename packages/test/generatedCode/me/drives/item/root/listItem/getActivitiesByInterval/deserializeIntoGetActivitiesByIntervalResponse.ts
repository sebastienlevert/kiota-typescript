import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoItemActivityStat} from '../../../../../../models/deserializeIntoItemActivityStat';
import {GetActivitiesByIntervalResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetActivitiesByIntervalResponse(getActivitiesByIntervalResponse: GetActivitiesByIntervalResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getActivitiesByIntervalResponse),
        "value": n => { getActivitiesByIntervalResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoItemActivityStat) as any ; },
    }
}
