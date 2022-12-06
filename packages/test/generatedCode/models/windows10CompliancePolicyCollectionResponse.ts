import {BaseCollectionPaginationCountResponse, Windows10CompliancePolicy} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Windows10CompliancePolicyCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Windows10CompliancePolicy[];
}
