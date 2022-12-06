import {serializeBaseCollectionPaginationCountResponse} from '../../../../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeItemActivityStat} from '../../../../../../models/serializeItemActivityStat';
import {GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse(writer: SerializationWriter, getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse: GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse.value as any, serializeItemActivityStat);
}
