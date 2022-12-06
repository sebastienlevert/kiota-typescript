import {DeviceConfiguration} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Windows10SecureAssessmentConfiguration extends DeviceConfiguration, Partial<Parsable> {
    /** Indicates whether or not to allow the app from printing during the test. */
    allowPrinting?: boolean;
    /** Indicates whether or not to allow screen capture capability during a test. */
    allowScreenCapture?: boolean;
    /** Indicates whether or not to allow text suggestions during the test. */
    allowTextSuggestion?: boolean;
    /** The account used to configure the Windows device for taking the test. The user can be a domain account (domain/user), an AAD account (username@tenant.com) or a local account (username). */
    configurationAccount?: string;
    /** Url link to an assessment that's automatically loaded when the secure assessment browser is launched. It has to be a valid Url (http[s]://msdn.microsoft.com/). */
    launchUri?: string;
}
