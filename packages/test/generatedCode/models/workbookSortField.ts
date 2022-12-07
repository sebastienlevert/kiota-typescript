import {WorkbookIcon} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookSortField extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Represents whether the sorting is done in an ascending fashion. */
    ascending?: boolean;
    /** Represents the color that is the target of the condition if the sorting is on font or cell color. */
    color?: string;
    /** Represents additional sorting options for this field. Possible values are: Normal, TextAsNumber. */
    dataOption?: string;
    /** The icon property */
    icon?: WorkbookIcon;
    /** Represents the column (or row, depending on the sort orientation) that the condition is on. Represented as an offset from the first column (or row). */
    key?: number;
    /** Represents the type of sorting of this condition. Possible values are: Value, CellColor, FontColor, Icon. */
    sortOn?: string;
}
