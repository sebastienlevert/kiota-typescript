import {TeleconferenceDeviceMediaQuality} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TeleconferenceDeviceVideoQuality extends Partial<Parsable>, TeleconferenceDeviceMediaQuality {
    /** The average inbound stream video bit rate per second. */
    averageInboundBitRate?: number;
    /** The average inbound stream video frame rate per second. */
    averageInboundFrameRate?: number;
    /** The average outbound stream video bit rate per second. */
    averageOutboundBitRate?: number;
    /** The average outbound stream video frame rate per second. */
    averageOutboundFrameRate?: number;
}
