import {BaseCollectionPaginationCountResponse, PhysicalAddress} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PhysicalAddressCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: PhysicalAddress[];
}
