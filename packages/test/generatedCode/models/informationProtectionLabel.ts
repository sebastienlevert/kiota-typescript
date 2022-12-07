import {Entity, ParentLabelDetails} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface InformationProtectionLabel extends Entity, Partial<Parsable> {
    /** The color that the UI should display for the label, if configured. */
    color?: string;
    /** The admin-defined description for the label. */
    description?: string;
    /** Indicates whether the label is active or not. Active labels should be hidden or disabled in UI. */
    isActive?: boolean;
    /** The plaintext name of the label. */
    name?: string;
    /** The parent property */
    parent?: ParentLabelDetails;
    /** The sensitivity value of the label, where lower is less sensitive. */
    sensitivity?: number;
    /** The tooltip that should be displayed for the label in a UI. */
    tooltip?: string;
}
