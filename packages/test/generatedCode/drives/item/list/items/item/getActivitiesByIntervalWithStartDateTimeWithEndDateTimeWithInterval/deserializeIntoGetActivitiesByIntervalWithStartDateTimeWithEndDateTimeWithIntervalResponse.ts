import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoItemActivityStat} from '../../../../../../models/deserializeIntoItemActivityStat';
import {GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse(getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse: GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse),
        "value": n => { getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoItemActivityStat) as any ; },
    }
}
