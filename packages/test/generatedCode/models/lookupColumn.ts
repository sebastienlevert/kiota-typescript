import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface LookupColumn extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Indicates whether multiple values can be selected from the source. */
    allowMultipleValues?: boolean;
    /** Indicates whether values in the column should be able to exceed the standard limit of 255 characters. */
    allowUnlimitedLength?: boolean;
    /** The name of the lookup source column. */
    columnName?: string;
    /** The unique identifier of the lookup source list. */
    listId?: string;
    /** If specified, this column is a secondary lookup, pulling an additional field from the list item looked up by the primary lookup. Use the list item looked up by the primary as the source for the column named here. */
    primaryLookupColumnId?: string;
}
