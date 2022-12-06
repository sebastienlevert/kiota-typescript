import {BaseCollectionPaginationCountResponse, MacOSCompliancePolicy} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MacOSCompliancePolicyCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: MacOSCompliancePolicy[];
}
