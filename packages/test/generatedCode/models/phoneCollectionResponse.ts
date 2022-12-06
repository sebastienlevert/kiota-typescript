import {BaseCollectionPaginationCountResponse, Phone} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PhoneCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Phone[];
}
