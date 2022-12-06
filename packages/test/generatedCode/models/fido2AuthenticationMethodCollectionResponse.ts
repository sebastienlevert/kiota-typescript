import {BaseCollectionPaginationCountResponse, Fido2AuthenticationMethod} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Fido2AuthenticationMethodCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Fido2AuthenticationMethod[];
}
