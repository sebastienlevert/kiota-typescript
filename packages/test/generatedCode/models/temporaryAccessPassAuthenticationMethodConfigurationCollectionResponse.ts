import {BaseCollectionPaginationCountResponse, TemporaryAccessPassAuthenticationMethodConfiguration} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TemporaryAccessPassAuthenticationMethodConfigurationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: TemporaryAccessPassAuthenticationMethodConfiguration[];
}
