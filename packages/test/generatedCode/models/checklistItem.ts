import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ChecklistItem extends Entity, Partial<Parsable> {
    /** The date and time when the checklistItem was finished. */
    checkedDateTime?: Date;
    /** The date and time when the checklistItem was created. */
    createdDateTime?: Date;
    /** Field indicating the title of checklistItem. */
    displayName?: string;
    /** State indicating whether the item is checked off or not. */
    isChecked?: boolean;
}
