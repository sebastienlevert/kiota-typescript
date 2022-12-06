import {BaseCollectionPaginationCountResponse, PhysicalOfficeAddress} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PhysicalOfficeAddressCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: PhysicalOfficeAddress[];
}
