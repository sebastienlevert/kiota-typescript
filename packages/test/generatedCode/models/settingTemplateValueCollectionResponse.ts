import {BaseCollectionPaginationCountResponse, SettingTemplateValue} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SettingTemplateValueCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: SettingTemplateValue[];
}
