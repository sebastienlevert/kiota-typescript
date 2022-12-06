import {BaseCollectionPaginationCountResponse, WindowsHelloForBusinessAuthenticationMethod} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsHelloForBusinessAuthenticationMethodCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: WindowsHelloForBusinessAuthenticationMethod[];
}
