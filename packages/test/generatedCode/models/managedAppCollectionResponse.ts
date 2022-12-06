import {BaseCollectionPaginationCountResponse, ManagedApp} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedAppCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ManagedApp[];
}
