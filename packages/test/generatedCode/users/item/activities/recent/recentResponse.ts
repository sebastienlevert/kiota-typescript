import {BaseCollectionPaginationCountResponse, UserActivity} from '../../../../models/';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RecentResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: UserActivity[];
}
