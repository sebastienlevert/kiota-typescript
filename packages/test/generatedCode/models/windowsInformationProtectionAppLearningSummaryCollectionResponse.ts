import {BaseCollectionPaginationCountResponse, WindowsInformationProtectionAppLearningSummary} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsInformationProtectionAppLearningSummaryCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: WindowsInformationProtectionAppLearningSummary[];
}
