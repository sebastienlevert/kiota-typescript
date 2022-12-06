import {BaseCollectionPaginationCountResponse, SettingValue} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SettingValueCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: SettingValue[];
}
