import {BaseCollectionPaginationCountResponse, ManagedMobileLobApp} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedMobileLobAppCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ManagedMobileLobApp[];
}
