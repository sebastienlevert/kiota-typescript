import {BaseCollectionPaginationCountResponse, KeyCredential} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface KeyCredentialCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: KeyCredential[];
}
