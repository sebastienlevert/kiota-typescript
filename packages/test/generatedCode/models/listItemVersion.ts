import {BaseItemVersion, FieldValueSet} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ListItemVersion extends BaseItemVersion, Partial<Parsable> {
    /** A collection of the fields and values for this version of the list item. */
    fields?: FieldValueSet;
}
