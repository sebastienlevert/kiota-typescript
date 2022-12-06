import {BaseCollectionPaginationCountResponse, GroupSetting} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GroupSettingCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: GroupSetting[];
}
