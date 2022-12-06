import {WindowsPhone81CustomConfiguration} from './index';
import {serializeDeviceConfiguration} from './serializeDeviceConfiguration';
import {serializeOmaSetting} from './serializeOmaSetting';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsPhone81CustomConfiguration(writer: SerializationWriter, windowsPhone81CustomConfiguration: WindowsPhone81CustomConfiguration | undefined = {}) : void {
        serializeDeviceConfiguration(writer, windowsPhone81CustomConfiguration)
            writer.writeCollectionOfObjectValuesFromMethod("omaSettings", windowsPhone81CustomConfiguration.omaSettings as any, serializeOmaSetting);
}
