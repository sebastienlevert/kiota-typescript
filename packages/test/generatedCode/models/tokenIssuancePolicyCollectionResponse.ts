import {BaseCollectionPaginationCountResponse, TokenIssuancePolicy} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TokenIssuancePolicyCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: TokenIssuancePolicy[];
}
