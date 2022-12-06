import {BaseCollectionPaginationCountResponse, ScheduleItem} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ScheduleItemCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ScheduleItem[];
}
