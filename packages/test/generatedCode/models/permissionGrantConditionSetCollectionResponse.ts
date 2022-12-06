import {BaseCollectionPaginationCountResponse, PermissionGrantConditionSet} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PermissionGrantConditionSetCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: PermissionGrantConditionSet[];
}
