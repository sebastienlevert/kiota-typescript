import {BaseCollectionPaginationCountResponse, IdentityProviderBase} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IdentityProviderBaseCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: IdentityProviderBase[];
}
