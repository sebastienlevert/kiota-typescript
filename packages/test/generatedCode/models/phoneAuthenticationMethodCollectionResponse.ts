import {BaseCollectionPaginationCountResponse, PhoneAuthenticationMethod} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PhoneAuthenticationMethodCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: PhoneAuthenticationMethod[];
}
