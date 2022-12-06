import {AndroidWorkProfileCompliancePolicy, BaseCollectionPaginationCountResponse} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AndroidWorkProfileCompliancePolicyCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: AndroidWorkProfileCompliancePolicy[];
}
