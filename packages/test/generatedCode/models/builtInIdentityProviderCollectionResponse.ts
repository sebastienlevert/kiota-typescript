import {BaseCollectionPaginationCountResponse, BuiltInIdentityProvider} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface BuiltInIdentityProviderCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: BuiltInIdentityProvider[];
}
