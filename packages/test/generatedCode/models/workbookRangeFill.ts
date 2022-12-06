import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookRangeFill extends Entity, Partial<Parsable> {
    /** HTML color code representing the color of the border line, of the form #RRGGBB (e.g. 'FFA500') or as a named HTML color (e.g. 'orange') */
    color?: string;
}
