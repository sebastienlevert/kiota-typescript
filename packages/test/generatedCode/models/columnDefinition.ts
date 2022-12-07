import {ColumnTypes} from './columnTypes';
import {BooleanColumn, CalculatedColumn, ChoiceColumn, ColumnValidation, ContentApprovalStatusColumn, ContentTypeInfo, CurrencyColumn, DateTimeColumn, DefaultColumnValue, Entity, GeolocationColumn, HyperlinkOrPictureColumn, LookupColumn, NumberColumn, PersonOrGroupColumn, TermColumn, TextColumn, ThumbnailColumn} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ColumnDefinition extends Entity, Partial<Parsable> {
    /** The boolean property */
    boolean?: BooleanColumn;
    /** The calculated property */
    calculated?: CalculatedColumn;
    /** The choice property */
    choice?: ChoiceColumn;
    /** For site columns, the name of the group this column belongs to. Helps organize related columns. */
    columnGroup?: string;
    /** The contentApprovalStatus property */
    contentApprovalStatus?: ContentApprovalStatusColumn;
    /** The currency property */
    currency?: CurrencyColumn;
    /** The dateTime property */
    dateTime?: DateTimeColumn;
    /** The defaultValue property */
    defaultValue?: DefaultColumnValue;
    /** The user-facing description of the column. */
    description?: string;
    /** The user-facing name of the column. */
    displayName?: string;
    /** If true, no two list items may have the same value for this column. */
    enforceUniqueValues?: boolean;
    /** The geolocation property */
    geolocation?: GeolocationColumn;
    /** Specifies whether the column is displayed in the user interface. */
    hidden?: boolean;
    /** The hyperlinkOrPicture property */
    hyperlinkOrPicture?: HyperlinkOrPictureColumn;
    /** Specifies whether the column values can used for sorting and searching. */
    indexed?: boolean;
    /** Indicates whether this column can be deleted. */
    isDeletable?: boolean;
    /** Indicates whether values in the column can be reordered. Read-only. */
    isReorderable?: boolean;
    /** Specifies whether the column can be changed. */
    isSealed?: boolean;
    /** The lookup property */
    lookup?: LookupColumn;
    /** The API-facing name of the column as it appears in the [fields][] on a [listItem][]. For the user-facing name, see displayName. */
    name?: string;
    /** The number property */
    number?: NumberColumn;
    /** The personOrGroup property */
    personOrGroup?: PersonOrGroupColumn;
    /** If true, changes to this column will be propagated to lists that implement the column. */
    propagateChanges?: boolean;
    /** Specifies whether the column values can be modified. */
    readOnly?: boolean;
    /** Specifies whether the column value isn't optional. */
    required?: boolean;
    /** The sourceColumn property */
    sourceColumn?: ColumnDefinition;
    /** The sourceContentType property */
    sourceContentType?: ContentTypeInfo;
    /** The term property */
    term?: TermColumn;
    /** The text property */
    text?: TextColumn;
    /** The thumbnail property */
    thumbnail?: ThumbnailColumn;
    /** The type property */
    type?: ColumnTypes;
    /** The validation property */
    validation?: ColumnValidation;
}
