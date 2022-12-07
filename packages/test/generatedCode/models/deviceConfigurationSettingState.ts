import {ComplianceStatus} from './complianceStatus';
import {SettingSource} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceConfigurationSettingState extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Current value of setting on device */
    currentValue?: string;
    /** Error code for the setting */
    errorCode?: number;
    /** Error description */
    errorDescription?: string;
    /** Name of setting instance that is being reported. */
    instanceDisplayName?: string;
    /** The setting that is being reported */
    setting?: string;
    /** SettingInstanceId */
    settingInstanceId?: string;
    /** Localized/user friendly setting name that is being reported */
    settingName?: string;
    /** Contributing policies */
    sources?: SettingSource[];
    /** The state property */
    state?: ComplianceStatus;
    /** UserEmail */
    userEmail?: string;
    /** UserId */
    userId?: string;
    /** UserName */
    userName?: string;
    /** UserPrincipalName. */
    userPrincipalName?: string;
}
