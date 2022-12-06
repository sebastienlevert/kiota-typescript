import {BaseCollectionPaginationCountResponse, LocationConstraintItem} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface LocationConstraintItemCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: LocationConstraintItem[];
}
