import {BaseCollectionPaginationCountResponse, ScheduleInformation} from '../../../models/';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GetScheduleResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ScheduleInformation[];
}
