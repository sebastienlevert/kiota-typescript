import {BaseCollectionPaginationCountResponse, Fido2AuthenticationMethodConfiguration} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Fido2AuthenticationMethodConfigurationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Fido2AuthenticationMethodConfiguration[];
}
