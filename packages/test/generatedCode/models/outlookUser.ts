import {Entity, OutlookCategory} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OutlookUser extends Entity, Partial<Parsable> {
    /** A list of categories defined for the user. */
    masterCategories?: OutlookCategory[];
}
