import {BaseCollectionPaginationCountResponse, PasswordAuthenticationMethod} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PasswordAuthenticationMethodCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: PasswordAuthenticationMethod[];
}
