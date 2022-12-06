import {MobileApp} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WebApp extends MobileApp, Partial<Parsable> {
    /** The web app URL. This property cannot be PATCHed. */
    appUrl?: string;
    /** Whether or not to use managed browser. This property is only applicable for Android and IOS. */
    useManagedBrowser?: boolean;
}
