import {SharedPCConfiguration} from './index';
import {serializeDeviceConfiguration} from './serializeDeviceConfiguration';
import {serializeSharedPCAccountManagerPolicy} from './serializeSharedPCAccountManagerPolicy';
import {SharedPCAllowedAccountType} from './sharedPCAllowedAccountType';
import {Parsable, ParseNode, SerializationWriter, TimeOnly} from '@microsoft/kiota-abstractions';

export function serializeSharedPCConfiguration(writer: SerializationWriter, sharedPCConfiguration: SharedPCConfiguration | undefined = {}) : void {
        serializeDeviceConfiguration(writer, sharedPCConfiguration)
            writer.writeObjectValueFromMethod("accountManagerPolicy", sharedPCConfiguration.accountManagerPolicy as any, serializeSharedPCAccountManagerPolicy);
            writer.writeEnumValue<SharedPCAllowedAccountType>("allowedAccounts", sharedPCConfiguration.allowedAccounts);
            writer.writeBooleanValue("allowLocalStorage", sharedPCConfiguration.allowLocalStorage);
            writer.writeBooleanValue("disableAccountManager", sharedPCConfiguration.disableAccountManager);
            writer.writeBooleanValue("disableEduPolicies", sharedPCConfiguration.disableEduPolicies);
            writer.writeBooleanValue("disablePowerPolicies", sharedPCConfiguration.disablePowerPolicies);
            writer.writeBooleanValue("disableSignInOnResume", sharedPCConfiguration.disableSignInOnResume);
            writer.writeBooleanValue("enabled", sharedPCConfiguration.enabled);
            writer.writeNumberValue("idleTimeBeforeSleepInSeconds", sharedPCConfiguration.idleTimeBeforeSleepInSeconds);
            writer.writeStringValue("kioskAppDisplayName", sharedPCConfiguration.kioskAppDisplayName);
            writer.writeStringValue("kioskAppUserModelId", sharedPCConfiguration.kioskAppUserModelId);
            writer.writeTimeOnlyValue("maintenanceStartTime", sharedPCConfiguration.maintenanceStartTime);
}
