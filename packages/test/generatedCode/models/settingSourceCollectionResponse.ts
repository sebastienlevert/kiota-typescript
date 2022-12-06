import {BaseCollectionPaginationCountResponse, SettingSource} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SettingSourceCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: SettingSource[];
}
