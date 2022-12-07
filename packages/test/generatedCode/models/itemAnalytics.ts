import {Entity, ItemActivityStat} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ItemAnalytics extends Entity, Partial<Parsable> {
    /** The allTime property */
    allTime?: ItemActivityStat;
    /** The itemActivityStats property */
    itemActivityStats?: ItemActivityStat[];
    /** The lastSevenDays property */
    lastSevenDays?: ItemActivityStat;
}
