import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookChartFont extends Entity, Partial<Parsable> {
    /** Represents the bold status of font. */
    bold?: boolean;
    /** HTML color code representation of the text color. E.g. #FF0000 represents Red. */
    color?: string;
    /** Represents the italic status of the font. */
    italic?: boolean;
    /** Font name (e.g. 'Calibri') */
    name?: string;
    /** Size of the font (e.g. 11) */
    size?: number;
    /** Type of underline applied to the font. The possible values are: None, Single. */
    underline?: string;
}
