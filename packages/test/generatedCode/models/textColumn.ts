import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface TextColumn extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Whether to allow multiple lines of text. */
    allowMultipleLines?: boolean;
    /** Whether updates to this column should replace existing text, or append to it. */
    appendChangesToExistingText?: boolean;
    /** The size of the text box. */
    linesForEditing?: number;
    /** The maximum number of characters for the value. */
    maxLength?: number;
    /** The type of text being stored. Must be one of plain or richText */
    textType?: string;
}
