import {DriveItem, Entity, IdentitySet, ItemActionSet, ItemActivityTimeSet, ListItem} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ItemActivityOLD extends Entity, Partial<Parsable> {
    /** The action property */
    action?: ItemActionSet;
    /** The actor property */
    actor?: IdentitySet;
    /** The driveItem property */
    driveItem?: DriveItem;
    /** The listItem property */
    listItem?: ListItem;
    /** The times property */
    times?: ItemActivityTimeSet;
}
