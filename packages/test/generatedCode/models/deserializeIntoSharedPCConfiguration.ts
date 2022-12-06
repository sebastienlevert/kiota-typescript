import {deserializeIntoDeviceConfiguration} from './deserializeIntoDeviceConfiguration';
import {deserializeIntoSharedPCAccountManagerPolicy} from './deserializeIntoSharedPCAccountManagerPolicy';
import {SharedPCConfiguration} from './index';
import {SharedPCAllowedAccountType} from './sharedPCAllowedAccountType';
import {Parsable, ParseNode, SerializationWriter, TimeOnly} from '@microsoft/kiota-abstractions';

export function deserializeIntoSharedPCConfiguration(sharedPCConfiguration: SharedPCConfiguration | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceConfiguration(sharedPCConfiguration),
        "accountManagerPolicy": n => { sharedPCConfiguration.accountManagerPolicy = n.getObject(deserializeIntoSharedPCAccountManagerPolicy) as any ; },
        "allowedAccounts": n => { sharedPCConfiguration.allowedAccounts = n.getEnumValue<SharedPCAllowedAccountType>(SharedPCAllowedAccountType) as any ; },
        "allowLocalStorage": n => { sharedPCConfiguration.allowLocalStorage = n.getBooleanValue() as any ; },
        "disableAccountManager": n => { sharedPCConfiguration.disableAccountManager = n.getBooleanValue() as any ; },
        "disableEduPolicies": n => { sharedPCConfiguration.disableEduPolicies = n.getBooleanValue() as any ; },
        "disablePowerPolicies": n => { sharedPCConfiguration.disablePowerPolicies = n.getBooleanValue() as any ; },
        "disableSignInOnResume": n => { sharedPCConfiguration.disableSignInOnResume = n.getBooleanValue() as any ; },
        "enabled": n => { sharedPCConfiguration.enabled = n.getBooleanValue() as any ; },
        "idleTimeBeforeSleepInSeconds": n => { sharedPCConfiguration.idleTimeBeforeSleepInSeconds = n.getNumberValue() as any ; },
        "kioskAppDisplayName": n => { sharedPCConfiguration.kioskAppDisplayName = n.getStringValue() as any ; },
        "kioskAppUserModelId": n => { sharedPCConfiguration.kioskAppUserModelId = n.getStringValue() as any ; },
        "maintenanceStartTime": n => { sharedPCConfiguration.maintenanceStartTime = n.getTimeOnlyValue() as any ; },
    }
}
