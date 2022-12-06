import {DeviceConfiguration, SharedPCAccountManagerPolicy} from './index';
import {SharedPCAllowedAccountType} from './sharedPCAllowedAccountType';
import {Parsable, TimeOnly} from '@microsoft/kiota-abstractions';

export interface SharedPCConfiguration extends DeviceConfiguration, Partial<Parsable> {
    /** Specifies how accounts are managed on a shared PC. Only applies when disableAccountManager is false. */
    accountManagerPolicy?: SharedPCAccountManagerPolicy;
    /** Type of accounts that are allowed to share the PC. */
    allowedAccounts?: SharedPCAllowedAccountType;
    /** Specifies whether local storage is allowed on a shared PC. */
    allowLocalStorage?: boolean;
    /** Disables the account manager for shared PC mode. */
    disableAccountManager?: boolean;
    /** Specifies whether the default shared PC education environment policies should be disabled. For Windows 10 RS2 and later, this policy will be applied without setting Enabled to true. */
    disableEduPolicies?: boolean;
    /** Specifies whether the default shared PC power policies should be disabled. */
    disablePowerPolicies?: boolean;
    /** Disables the requirement to sign in whenever the device wakes up from sleep mode. */
    disableSignInOnResume?: boolean;
    /** Enables shared PC mode and applies the shared pc policies. */
    enabled?: boolean;
    /** Specifies the time in seconds that a device must sit idle before the PC goes to sleep. Setting this value to 0 prevents the sleep timeout from occurring. */
    idleTimeBeforeSleepInSeconds?: number;
    /** Specifies the display text for the account shown on the sign-in screen which launches the app specified by SetKioskAppUserModelId. Only applies when KioskAppUserModelId is set. */
    kioskAppDisplayName?: string;
    /** Specifies the application user model ID of the app to use with assigned access. */
    kioskAppUserModelId?: string;
    /** Specifies the daily start time of maintenance hour. */
    maintenanceStartTime?: TimeOnly;
}
