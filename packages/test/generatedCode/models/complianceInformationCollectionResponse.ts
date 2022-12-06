import {BaseCollectionPaginationCountResponse, ComplianceInformation} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ComplianceInformationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ComplianceInformation[];
}
