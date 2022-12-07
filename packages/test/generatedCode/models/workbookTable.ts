import {Entity, WorkbookTableColumn, WorkbookTableRow, WorkbookTableSort, WorkbookWorksheet} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookTable extends Entity, Partial<Parsable> {
    /** Represents a collection of all the columns in the table. Read-only. */
    columns?: WorkbookTableColumn[];
    /** Indicates whether the first column contains special formatting. */
    highlightFirstColumn?: boolean;
    /** Indicates whether the last column contains special formatting. */
    highlightLastColumn?: boolean;
    /** Legacy Id used in older Excle clients. The value of the identifier remains the same even when the table is renamed. This property should be interpreted as an opaque string value and should not be parsed to any other type. Read-only. */
    legacyId?: string;
    /** Name of the table. */
    name?: string;
    /** Represents a collection of all the rows in the table. Read-only. */
    rows?: WorkbookTableRow[];
    /** Indicates whether the columns show banded formatting in which odd columns are highlighted differently from even ones to make reading the table easier. */
    showBandedColumns?: boolean;
    /** Indicates whether the rows show banded formatting in which odd rows are highlighted differently from even ones to make reading the table easier. */
    showBandedRows?: boolean;
    /** Indicates whether the filter buttons are visible at the top of each column header. Setting this is only allowed if the table contains a header row. */
    showFilterButton?: boolean;
    /** Indicates whether the header row is visible or not. This value can be set to show or remove the header row. */
    showHeaders?: boolean;
    /** Indicates whether the total row is visible or not. This value can be set to show or remove the total row. */
    showTotals?: boolean;
    /** The sort property */
    sort?: WorkbookTableSort;
    /** Constant value that represents the Table style. Possible values are: TableStyleLight1 thru TableStyleLight21, TableStyleMedium1 thru TableStyleMedium28, TableStyleStyleDark1 thru TableStyleStyleDark11. A custom user-defined style present in the workbook can also be specified. */
    style?: string;
    /** The worksheet property */
    worksheet?: WorkbookWorksheet;
}
