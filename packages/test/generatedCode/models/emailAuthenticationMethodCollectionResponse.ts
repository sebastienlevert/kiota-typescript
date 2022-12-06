import {BaseCollectionPaginationCountResponse, EmailAuthenticationMethod} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EmailAuthenticationMethodCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: EmailAuthenticationMethod[];
}
