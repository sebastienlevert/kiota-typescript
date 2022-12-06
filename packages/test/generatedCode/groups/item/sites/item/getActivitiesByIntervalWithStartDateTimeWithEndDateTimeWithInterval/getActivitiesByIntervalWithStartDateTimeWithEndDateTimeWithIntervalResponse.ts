import {BaseCollectionPaginationCountResponse, ItemActivityStat} from '../../../../../models/';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ItemActivityStat[];
}
