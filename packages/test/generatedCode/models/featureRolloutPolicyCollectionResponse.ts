import {BaseCollectionPaginationCountResponse, FeatureRolloutPolicy} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface FeatureRolloutPolicyCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: FeatureRolloutPolicy[];
}
