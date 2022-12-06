import {WindowsInformationProtectionApp} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsInformationProtectionDesktopApp extends Partial<Parsable>, WindowsInformationProtectionApp {
    /** The binary name. */
    binaryName?: string;
    /** The high binary version. */
    binaryVersionHigh?: string;
    /** The lower binary version. */
    binaryVersionLow?: string;
}
