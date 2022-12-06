import {Entity, Json} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookRangeView extends Entity, Partial<Parsable> {
    /** Represents the cell addresses */
    cellAddresses?: Json;
    /** Returns the number of visible columns. Read-only. */
    columnCount?: number;
    /** Represents the formula in A1-style notation. */
    formulas?: Json;
    /** Represents the formula in A1-style notation, in the user's language and number-formatting locale. For example, the English '=SUM(A1, 1.5)' formula would become '=SUMME(A1; 1,5)' in German. */
    formulasLocal?: Json;
    /** Represents the formula in R1C1-style notation. */
    formulasR1C1?: Json;
    /** Index of the range. */
    index?: number;
    /** Represents Excel's number format code for the given cell. Read-only. */
    numberFormat?: Json;
    /** Returns the number of visible rows. Read-only. */
    rowCount?: number;
    /** Represents a collection of range views associated with the range. Read-only. Read-only. */
    rows?: WorkbookRangeView[];
    /** Text values of the specified range. The Text value will not depend on the cell width. The # sign substitution that happens in Excel UI will not affect the text value returned by the API. Read-only. */
    text?: Json;
    /** Represents the raw values of the specified range view. The data returned could be of type string, number, or a boolean. Cell that contain an error will return the error string. */
    values?: Json;
    /** Represents the type of data of each cell. Read-only. The possible values are: Unknown, Empty, String, Integer, Double, Boolean, Error. */
    valueTypes?: Json;
}
