import {BaseCollectionPaginationCountResponse, ResourceAction} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ResourceActionCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ResourceAction[];
}
