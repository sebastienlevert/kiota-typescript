import {BaseCollectionPaginationCountResponse, SocialIdentityProvider} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SocialIdentityProviderCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: SocialIdentityProvider[];
}
