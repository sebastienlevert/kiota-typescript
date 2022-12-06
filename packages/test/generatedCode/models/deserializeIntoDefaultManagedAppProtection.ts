import {deserializeIntoKeyValuePair} from './deserializeIntoKeyValuePair';
import {deserializeIntoManagedAppPolicyDeploymentSummary} from './deserializeIntoManagedAppPolicyDeploymentSummary';
import {deserializeIntoManagedAppProtection} from './deserializeIntoManagedAppProtection';
import {deserializeIntoManagedMobileApp} from './deserializeIntoManagedMobileApp';
import {DefaultManagedAppProtection} from './index';
import {ManagedAppDataEncryptionType} from './managedAppDataEncryptionType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDefaultManagedAppProtection(defaultManagedAppProtection: DefaultManagedAppProtection | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoManagedAppProtection(defaultManagedAppProtection),
        "appDataEncryptionType": n => { defaultManagedAppProtection.appDataEncryptionType = n.getEnumValue<ManagedAppDataEncryptionType>(ManagedAppDataEncryptionType) as any ; },
        "apps": n => { defaultManagedAppProtection.apps = n.getCollectionOfObjectValuesFromMethod(deserializeIntoManagedMobileApp) as any ; },
        "customSettings": n => { defaultManagedAppProtection.customSettings = n.getCollectionOfObjectValuesFromMethod(deserializeIntoKeyValuePair) as any ; },
        "deployedAppCount": n => { defaultManagedAppProtection.deployedAppCount = n.getNumberValue() as any ; },
        "deploymentSummary": n => { defaultManagedAppProtection.deploymentSummary = n.getObject(deserializeIntoManagedAppPolicyDeploymentSummary) as any ; },
        "disableAppEncryptionIfDeviceEncryptionIsEnabled": n => { defaultManagedAppProtection.disableAppEncryptionIfDeviceEncryptionIsEnabled = n.getBooleanValue() as any ; },
        "encryptAppData": n => { defaultManagedAppProtection.encryptAppData = n.getBooleanValue() as any ; },
        "faceIdBlocked": n => { defaultManagedAppProtection.faceIdBlocked = n.getBooleanValue() as any ; },
        "minimumRequiredPatchVersion": n => { defaultManagedAppProtection.minimumRequiredPatchVersion = n.getStringValue() as any ; },
        "minimumRequiredSdkVersion": n => { defaultManagedAppProtection.minimumRequiredSdkVersion = n.getStringValue() as any ; },
        "minimumWarningPatchVersion": n => { defaultManagedAppProtection.minimumWarningPatchVersion = n.getStringValue() as any ; },
        "screenCaptureBlocked": n => { defaultManagedAppProtection.screenCaptureBlocked = n.getBooleanValue() as any ; },
    }
}
