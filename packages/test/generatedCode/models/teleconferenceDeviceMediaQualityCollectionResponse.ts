import {BaseCollectionPaginationCountResponse, TeleconferenceDeviceMediaQuality} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TeleconferenceDeviceMediaQualityCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: TeleconferenceDeviceMediaQuality[];
}
