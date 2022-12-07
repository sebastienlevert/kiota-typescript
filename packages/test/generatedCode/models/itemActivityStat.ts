import {Entity, IncompleteData, ItemActionStat, ItemActivity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ItemActivityStat extends Entity, Partial<Parsable> {
    /** The access property */
    access?: ItemActionStat;
    /** Exposes the itemActivities represented in this itemActivityStat resource. */
    activities?: ItemActivity[];
    /** The create property */
    create?: ItemActionStat;
    /** The delete property */
    delete?: ItemActionStat;
    /** The edit property */
    edit?: ItemActionStat;
    /** When the interval ends. Read-only. */
    endDateTime?: Date;
    /** The incompleteData property */
    incompleteData?: IncompleteData;
    /** Indicates whether the item is 'trending.' Read-only. */
    isTrending?: boolean;
    /** The move property */
    move?: ItemActionStat;
    /** When the interval starts. Read-only. */
    startDateTime?: Date;
}
