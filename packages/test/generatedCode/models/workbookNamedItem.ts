import {Entity, Json, WorkbookWorksheet} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookNamedItem extends Entity, Partial<Parsable> {
    /** Represents the comment associated with this name. */
    comment?: string;
    /** The name of the object. Read-only. */
    name?: string;
    /** Indicates whether the name is scoped to the workbook or to a specific worksheet. Read-only. */
    scope?: string;
    /** Indicates what type of reference is associated with the name. The possible values are: String, Integer, Double, Boolean, Range. Read-only. */
    type?: string;
    /** Represents the formula that the name is defined to refer to. E.g. =Sheet14!$B$2:$H$12, =4.75, etc. Read-only. */
    value?: Json;
    /** Specifies whether the object is visible or not. */
    visible?: boolean;
    /** Returns the worksheet on which the named item is scoped to. Available only if the item is scoped to the worksheet. Read-only. */
    worksheet?: WorkbookWorksheet;
}
