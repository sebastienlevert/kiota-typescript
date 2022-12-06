import {BaseCollectionPaginationCountResponse, TemporaryAccessPassAuthenticationMethod} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TemporaryAccessPassAuthenticationMethodCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: TemporaryAccessPassAuthenticationMethod[];
}
