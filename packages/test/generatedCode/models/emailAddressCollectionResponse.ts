import {BaseCollectionPaginationCountResponse, EmailAddress} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EmailAddressCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: EmailAddress[];
}
