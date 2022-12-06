import {BaseCollectionPaginationCountResponse, FederatedIdentityCredential} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface FederatedIdentityCredentialCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: FederatedIdentityCredential[];
}
