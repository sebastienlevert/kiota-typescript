import {BaseCollectionPaginationCountResponse, Windows10EndpointProtectionConfiguration} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Windows10EndpointProtectionConfigurationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Windows10EndpointProtectionConfiguration[];
}
