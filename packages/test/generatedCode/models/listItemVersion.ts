import {BaseItemVersion, FieldValueSet} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ListItemVersion extends BaseItemVersion, Partial<Parsable> {
    /** The fields property */
    fields?: FieldValueSet;
}
