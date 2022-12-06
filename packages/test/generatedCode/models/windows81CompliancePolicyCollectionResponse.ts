import {BaseCollectionPaginationCountResponse, Windows81CompliancePolicy} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Windows81CompliancePolicyCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Windows81CompliancePolicy[];
}
