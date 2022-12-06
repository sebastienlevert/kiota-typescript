import {AndroidWorkProfileCustomConfiguration} from './index';
import {serializeDeviceConfiguration} from './serializeDeviceConfiguration';
import {serializeOmaSetting} from './serializeOmaSetting';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAndroidWorkProfileCustomConfiguration(writer: SerializationWriter, androidWorkProfileCustomConfiguration: AndroidWorkProfileCustomConfiguration | undefined = {}) : void {
        serializeDeviceConfiguration(writer, androidWorkProfileCustomConfiguration)
            writer.writeCollectionOfObjectValuesFromMethod("omaSettings", androidWorkProfileCustomConfiguration.omaSettings as any, serializeOmaSetting);
}
