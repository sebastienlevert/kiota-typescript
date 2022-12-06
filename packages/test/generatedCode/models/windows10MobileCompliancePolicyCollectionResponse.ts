import {BaseCollectionPaginationCountResponse, Windows10MobileCompliancePolicy} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Windows10MobileCompliancePolicyCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Windows10MobileCompliancePolicy[];
}
