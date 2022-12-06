import {BaseCollectionPaginationCountResponse, EmailAuthenticationMethodConfiguration} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EmailAuthenticationMethodConfigurationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: EmailAuthenticationMethodConfiguration[];
}
