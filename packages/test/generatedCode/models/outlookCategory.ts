import {CategoryColor} from './categoryColor';
import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OutlookCategory extends Entity, Partial<Parsable> {
    /** The color property */
    color?: CategoryColor;
    /** A unique name that identifies a category in the user's mailbox. After a category is created, the name cannot be changed. Read-only. */
    displayName?: string;
}
