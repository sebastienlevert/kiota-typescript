import {MobileApp} from './index';
import {MicrosoftEdgeChannel} from './microsoftEdgeChannel';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MacOSMicrosoftEdgeApp extends MobileApp, Partial<Parsable> {
    /** The enum to specify the channels for Microsoft Edge apps. */
    channel?: MicrosoftEdgeChannel;
}
