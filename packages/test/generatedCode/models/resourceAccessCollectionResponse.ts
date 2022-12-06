import {BaseCollectionPaginationCountResponse, ResourceAccess} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ResourceAccessCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ResourceAccess[];
}
