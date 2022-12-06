import {AndroidCustomConfiguration} from './index';
import {serializeDeviceConfiguration} from './serializeDeviceConfiguration';
import {serializeOmaSetting} from './serializeOmaSetting';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAndroidCustomConfiguration(writer: SerializationWriter, androidCustomConfiguration: AndroidCustomConfiguration | undefined = {}) : void {
        serializeDeviceConfiguration(writer, androidCustomConfiguration)
            writer.writeCollectionOfObjectValuesFromMethod("omaSettings", androidCustomConfiguration.omaSettings as any, serializeOmaSetting);
}
