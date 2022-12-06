import {MobileLobApp} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsMobileMSI extends MobileLobApp, Partial<Parsable> {
    /** The command line. */
    commandLine?: string;
    /** A boolean to control whether the app's version will be used to detect the app after it is installed on a device. Set this to true for Windows Mobile MSI Line of Business (LoB) apps that use a self update feature. */
    ignoreVersionDetection?: boolean;
    /** The product code. */
    productCode?: string;
    /** The product version of Windows Mobile MSI Line of Business (LoB) app. */
    productVersion?: string;
}
