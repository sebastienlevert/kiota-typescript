import {AppleManagedIdentityProvider, BaseCollectionPaginationCountResponse} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AppleManagedIdentityProviderCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: AppleManagedIdentityProvider[];
}
