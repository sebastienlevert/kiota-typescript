import {deserializeIntoManagedAppPolicyDeploymentSummary} from './deserializeIntoManagedAppPolicyDeploymentSummary';
import {deserializeIntoManagedMobileApp} from './deserializeIntoManagedMobileApp';
import {deserializeIntoTargetedManagedAppProtection} from './deserializeIntoTargetedManagedAppProtection';
import {IosManagedAppProtection} from './index';
import {ManagedAppDataEncryptionType} from './managedAppDataEncryptionType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosManagedAppProtection(iosManagedAppProtection: IosManagedAppProtection | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoTargetedManagedAppProtection(iosManagedAppProtection),
        "appDataEncryptionType": n => { iosManagedAppProtection.appDataEncryptionType = n.getEnumValue<ManagedAppDataEncryptionType>(ManagedAppDataEncryptionType) as any ; },
        "apps": n => { iosManagedAppProtection.apps = n.getCollectionOfObjectValuesFromMethod(deserializeIntoManagedMobileApp) as any ; },
        "customBrowserProtocol": n => { iosManagedAppProtection.customBrowserProtocol = n.getStringValue() as any ; },
        "deployedAppCount": n => { iosManagedAppProtection.deployedAppCount = n.getNumberValue() as any ; },
        "deploymentSummary": n => { iosManagedAppProtection.deploymentSummary = n.getObject(deserializeIntoManagedAppPolicyDeploymentSummary) as any ; },
        "faceIdBlocked": n => { iosManagedAppProtection.faceIdBlocked = n.getBooleanValue() as any ; },
        "minimumRequiredSdkVersion": n => { iosManagedAppProtection.minimumRequiredSdkVersion = n.getStringValue() as any ; },
    }
}
