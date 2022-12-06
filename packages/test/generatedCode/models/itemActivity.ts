import {AccessAction, DriveItem, Entity, IdentitySet} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ItemActivity extends Entity, Partial<Parsable> {
    /** An item was accessed. */
    access?: AccessAction;
    /** Details about when the activity took place. Read-only. */
    activityDateTime?: Date;
    /** Identity of who performed the action. Read-only. */
    actor?: IdentitySet;
    /** Exposes the driveItem that was the target of this activity. */
    driveItem?: DriveItem;
}
