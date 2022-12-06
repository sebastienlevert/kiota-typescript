import {deserializeIntoDeviceConfiguration} from './deserializeIntoDeviceConfiguration';
import {Windows10EnterpriseModernAppManagementConfiguration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindows10EnterpriseModernAppManagementConfiguration(windows10EnterpriseModernAppManagementConfiguration: Windows10EnterpriseModernAppManagementConfiguration | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceConfiguration(windows10EnterpriseModernAppManagementConfiguration),
        "uninstallBuiltInApps": n => { windows10EnterpriseModernAppManagementConfiguration.uninstallBuiltInApps = n.getBooleanValue() as any ; },
    }
}
