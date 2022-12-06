import {BaseCollectionPaginationCountResponse, OptionalClaim} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OptionalClaimCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: OptionalClaim[];
}
