import {BaseCollectionPaginationCountResponse, TokenLifetimePolicy} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TokenLifetimePolicyCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: TokenLifetimePolicy[];
}
