import {Entity, Json, WorkbookWorksheet} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookNamedItem extends Entity, Partial<Parsable> {
    /** Represents the comment associated with this name. */
    comment?: string;
    /** The name of the object. Read-only. */
    name?: string;
    /** Indicates whether the name is scoped to the workbook or to a specific worksheet. Read-only. */
    scope?: string;
    /** Indicates what type of reference is associated with the name. Possible values are: String, Integer, Double, Boolean, Range. Read-only. */
    type?: string;
    /** The value property */
    value?: Json;
    /** Specifies whether the object is visible or not. */
    visible?: boolean;
    /** The worksheet property */
    worksheet?: WorkbookWorksheet;
}
