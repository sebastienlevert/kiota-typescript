import {BaseCollectionPaginationCountResponse, SettingStateDeviceSummary} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SettingStateDeviceSummaryCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: SettingStateDeviceSummary[];
}
