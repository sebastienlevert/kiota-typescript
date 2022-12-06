import {BaseCollectionPaginationCountResponse, WindowsInformationProtectionIPRangeCollection} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsInformationProtectionIPRangeCollectionCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: WindowsInformationProtectionIPRangeCollection[];
}
