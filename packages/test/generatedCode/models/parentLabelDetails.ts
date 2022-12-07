import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ParentLabelDetails extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The color that the user interface should display for the label, if configured. */
    color?: string;
    /** The admin-defined description for the label. */
    description?: string;
    /** The label ID is a globally unique identifier (GUID). */
    id?: string;
    /** Indicates whether the label is active or not. Active labels should be hidden or disabled in user interfaces. */
    isActive?: boolean;
    /** The plaintext name of the label. */
    name?: string;
    /** The parent property */
    parent?: ParentLabelDetails;
    /** The sensitivity value of the label, where lower is less sensitive. */
    sensitivity?: number;
    /** The tooltip that should be displayed for the label in a user interface. */
    tooltip?: string;
}
