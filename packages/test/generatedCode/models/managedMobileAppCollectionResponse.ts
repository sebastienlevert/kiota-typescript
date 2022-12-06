import {BaseCollectionPaginationCountResponse, ManagedMobileApp} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedMobileAppCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ManagedMobileApp[];
}
