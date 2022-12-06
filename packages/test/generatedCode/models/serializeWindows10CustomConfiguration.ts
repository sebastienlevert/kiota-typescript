import {Windows10CustomConfiguration} from './index';
import {serializeDeviceConfiguration} from './serializeDeviceConfiguration';
import {serializeOmaSetting} from './serializeOmaSetting';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindows10CustomConfiguration(writer: SerializationWriter, windows10CustomConfiguration: Windows10CustomConfiguration | undefined = {}) : void {
        serializeDeviceConfiguration(writer, windows10CustomConfiguration)
            writer.writeCollectionOfObjectValuesFromMethod("omaSettings", windows10CustomConfiguration.omaSettings as any, serializeOmaSetting);
}
