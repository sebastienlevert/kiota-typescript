import {BaseCollectionPaginationCountResponse, SoftwareOathAuthenticationMethod} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SoftwareOathAuthenticationMethodCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: SoftwareOathAuthenticationMethod[];
}
