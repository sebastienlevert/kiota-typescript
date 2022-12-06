import {BaseCollectionPaginationCountResponse, ClaimsMappingPolicy} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ClaimsMappingPolicyCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ClaimsMappingPolicy[];
}
