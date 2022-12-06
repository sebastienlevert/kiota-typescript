import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookRangeFont extends Entity, Partial<Parsable> {
    /** Represents the bold status of font. */
    bold?: boolean;
    /** HTML color code representation of the text color. E.g. #FF0000 represents Red. */
    color?: string;
    /** Represents the italic status of the font. */
    italic?: boolean;
    /** Font name (e.g. 'Calibri') */
    name?: string;
    /** Font size. */
    size?: number;
    /** Type of underline applied to the font. The possible values are: None, Single, Double, SingleAccountant, DoubleAccountant. */
    underline?: string;
}
