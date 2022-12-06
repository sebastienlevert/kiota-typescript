import {BaseCollectionPaginationCountResponse, PasswordCredential} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PasswordCredentialCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: PasswordCredential[];
}
