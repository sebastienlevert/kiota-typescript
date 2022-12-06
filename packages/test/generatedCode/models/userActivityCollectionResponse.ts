import {BaseCollectionPaginationCountResponse, UserActivity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserActivityCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: UserActivity[];
}
