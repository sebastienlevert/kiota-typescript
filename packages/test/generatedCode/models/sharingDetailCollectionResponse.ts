import {BaseCollectionPaginationCountResponse, SharingDetail} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SharingDetailCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: SharingDetail[];
}
