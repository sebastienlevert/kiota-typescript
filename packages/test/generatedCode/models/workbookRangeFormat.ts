import {Entity, WorkbookFormatProtection, WorkbookRangeBorder, WorkbookRangeFill, WorkbookRangeFont} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookRangeFormat extends Entity, Partial<Parsable> {
    /** Collection of border objects that apply to the overall range selected Read-only. */
    borders?: WorkbookRangeBorder[];
    /** Gets or sets the width of all colums within the range. If the column widths are not uniform, null will be returned. */
    columnWidth?: number;
    /** Returns the fill object defined on the overall range. Read-only. */
    fill?: WorkbookRangeFill;
    /** Returns the font object defined on the overall range selected Read-only. */
    font?: WorkbookRangeFont;
    /** Represents the horizontal alignment for the specified object. The possible values are: General, Left, Center, Right, Fill, Justify, CenterAcrossSelection, Distributed. */
    horizontalAlignment?: string;
    /** Returns the format protection object for a range. Read-only. */
    protection?: WorkbookFormatProtection;
    /** Gets or sets the height of all rows in the range. If the row heights are not uniform null will be returned. */
    rowHeight?: number;
    /** Represents the vertical alignment for the specified object. The possible values are: Top, Center, Bottom, Justify, Distributed. */
    verticalAlignment?: string;
    /** Indicates if Excel wraps the text in the object. A null value indicates that the entire range doesn't have uniform wrap setting */
    wrapText?: boolean;
}
