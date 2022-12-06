import {Windows10EnterpriseModernAppManagementConfiguration} from './index';
import {serializeDeviceConfiguration} from './serializeDeviceConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindows10EnterpriseModernAppManagementConfiguration(writer: SerializationWriter, windows10EnterpriseModernAppManagementConfiguration: Windows10EnterpriseModernAppManagementConfiguration | undefined = {}) : void {
        serializeDeviceConfiguration(writer, windows10EnterpriseModernAppManagementConfiguration)
            writer.writeBooleanValue("uninstallBuiltInApps", windows10EnterpriseModernAppManagementConfiguration.uninstallBuiltInApps);
}
