import {BaseCollectionPaginationCountResponse, WindowsPhone81CompliancePolicy} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsPhone81CompliancePolicyCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: WindowsPhone81CompliancePolicy[];
}
