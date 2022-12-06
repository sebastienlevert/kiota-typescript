import {BaseCollectionPaginationCountResponse, SamlOrWsFedProvider} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SamlOrWsFedProviderCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: SamlOrWsFedProvider[];
}
