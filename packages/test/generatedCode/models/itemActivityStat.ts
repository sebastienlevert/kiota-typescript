import {Entity, IncompleteData, ItemActionStat, ItemActivity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ItemActivityStat extends Entity, Partial<Parsable> {
    /** Statistics about the access actions in this interval. Read-only. */
    access?: ItemActionStat;
    /** Exposes the itemActivities represented in this itemActivityStat resource. */
    activities?: ItemActivity[];
    /** Statistics about the create actions in this interval. Read-only. */
    create?: ItemActionStat;
    /** Statistics about the delete actions in this interval. Read-only. */
    delete?: ItemActionStat;
    /** Statistics about the edit actions in this interval. Read-only. */
    edit?: ItemActionStat;
    /** When the interval ends. Read-only. */
    endDateTime?: Date;
    /** Indicates that the statistics in this interval are based on incomplete data. Read-only. */
    incompleteData?: IncompleteData;
    /** Indicates whether the item is 'trending.' Read-only. */
    isTrending?: boolean;
    /** Statistics about the move actions in this interval. Read-only. */
    move?: ItemActionStat;
    /** When the interval starts. Read-only. */
    startDateTime?: Date;
}
