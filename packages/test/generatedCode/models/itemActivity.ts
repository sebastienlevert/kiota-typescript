import {AccessAction, DriveItem, Entity, IdentitySet} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ItemActivity extends Entity, Partial<Parsable> {
    /** The access property */
    access?: AccessAction;
    /** The activityDateTime property */
    activityDateTime?: Date;
    /** The actor property */
    actor?: IdentitySet;
    /** The driveItem property */
    driveItem?: DriveItem;
}
