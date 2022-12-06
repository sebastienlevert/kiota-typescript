import {BaseCollectionPaginationCountResponse, SharePointIdentitySet} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SharePointIdentitySetCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: SharePointIdentitySet[];
}
