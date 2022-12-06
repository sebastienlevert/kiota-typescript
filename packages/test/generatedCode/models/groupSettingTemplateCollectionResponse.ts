import {BaseCollectionPaginationCountResponse, GroupSettingTemplate} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GroupSettingTemplateCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: GroupSettingTemplate[];
}
