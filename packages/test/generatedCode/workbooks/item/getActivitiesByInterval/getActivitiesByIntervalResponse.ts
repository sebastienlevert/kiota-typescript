import {BaseCollectionPaginationCountResponse, ItemActivityStat} from '../../../models/';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GetActivitiesByIntervalResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ItemActivityStat[];
}
