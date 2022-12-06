import {ColumnTypes} from './columnTypes';
import {BooleanColumn, CalculatedColumn, ChoiceColumn, ColumnValidation, ContentApprovalStatusColumn, ContentTypeInfo, CurrencyColumn, DateTimeColumn, DefaultColumnValue, Entity, GeolocationColumn, HyperlinkOrPictureColumn, LookupColumn, NumberColumn, PersonOrGroupColumn, TermColumn, TextColumn, ThumbnailColumn} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ColumnDefinition extends Entity, Partial<Parsable> {
    /** This column stores boolean values. */
    boolean?: BooleanColumn;
    /** This column's data is calculated based on other columns. */
    calculated?: CalculatedColumn;
    /** This column stores data from a list of choices. */
    choice?: ChoiceColumn;
    /** For site columns, the name of the group this column belongs to. Helps organize related columns. */
    columnGroup?: string;
    /** This column stores content approval status. */
    contentApprovalStatus?: ContentApprovalStatusColumn;
    /** This column stores currency values. */
    currency?: CurrencyColumn;
    /** This column stores DateTime values. */
    dateTime?: DateTimeColumn;
    /** The default value for this column. */
    defaultValue?: DefaultColumnValue;
    /** The user-facing description of the column. */
    description?: string;
    /** The user-facing name of the column. */
    displayName?: string;
    /** If true, no two list items may have the same value for this column. */
    enforceUniqueValues?: boolean;
    /** This column stores a geolocation. */
    geolocation?: GeolocationColumn;
    /** Specifies whether the column is displayed in the user interface. */
    hidden?: boolean;
    /** This column stores hyperlink or picture values. */
    hyperlinkOrPicture?: HyperlinkOrPictureColumn;
    /** Specifies whether the column values can be used for sorting and searching. */
    indexed?: boolean;
    /** Indicates whether this column can be deleted. */
    isDeletable?: boolean;
    /** Indicates whether values in the column can be reordered. Read-only. */
    isReorderable?: boolean;
    /** Specifies whether the column can be changed. */
    isSealed?: boolean;
    /** This column's data is looked up from another source in the site. */
    lookup?: LookupColumn;
    /** The API-facing name of the column as it appears in the [fields][] on a [listItem][]. For the user-facing name, see displayName. */
    name?: string;
    /** This column stores number values. */
    number?: NumberColumn;
    /** This column stores Person or Group values. */
    personOrGroup?: PersonOrGroupColumn;
    /** If 'true', changes to this column will be propagated to lists that implement the column. */
    propagateChanges?: boolean;
    /** Specifies whether the column values can be modified. */
    readOnly?: boolean;
    /** Specifies whether the column value isn't optional. */
    required?: boolean;
    /** The source column for the content type column. */
    sourceColumn?: ColumnDefinition;
    /** ContentType from which this column is inherited from. Present only in contentTypes columns response. Read-only. */
    sourceContentType?: ContentTypeInfo;
    /** This column stores taxonomy terms. */
    term?: TermColumn;
    /** This column stores text values. */
    text?: TextColumn;
    /** This column stores thumbnail values. */
    thumbnail?: ThumbnailColumn;
    /** For site columns, the type of column. Read-only. */
    type?: ColumnTypes;
    /** This column stores validation formula and message for the column. */
    validation?: ColumnValidation;
}
