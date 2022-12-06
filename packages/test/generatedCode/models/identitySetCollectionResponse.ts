import {BaseCollectionPaginationCountResponse, IdentitySet} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IdentitySetCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: IdentitySet[];
}
