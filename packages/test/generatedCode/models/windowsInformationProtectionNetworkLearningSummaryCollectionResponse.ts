import {BaseCollectionPaginationCountResponse, WindowsInformationProtectionNetworkLearningSummary} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsInformationProtectionNetworkLearningSummaryCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: WindowsInformationProtectionNetworkLearningSummary[];
}
