import {BaseCollectionPaginationCountResponse, IdentityProvider} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IdentityProviderCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: IdentityProvider[];
}
