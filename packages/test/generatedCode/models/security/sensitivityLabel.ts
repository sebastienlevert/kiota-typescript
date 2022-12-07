import {Entity} from '../';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SensitivityLabel extends Entity, Partial<Parsable> {
    /** The color that the UI should display for the label, if configured. */
    color?: string;
    /** Returns the supported content formats for the label. */
    contentFormats?: string[];
    /** The admin-defined description for the label. */
    description?: string;
    /** Indicates whether the label has protection actions configured. */
    hasProtection?: boolean;
    /** Indicates whether the label is active or not. Active labels should be hidden or disabled in the UI. */
    isActive?: boolean;
    /** Indicates whether the label can be applied to content. False if the label is a parent with child labels. */
    isAppliable?: boolean;
    /** The plaintext name of the label. */
    name?: string;
    /** The parent property */
    parent?: SensitivityLabel;
    /** The sensitivity value of the label, where lower is less sensitive. */
    sensitivity?: number;
    /** The tooltip that should be displayed for the label in a UI. */
    tooltip?: string;
}
