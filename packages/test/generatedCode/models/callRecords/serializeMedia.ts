import {Media} from './index';
import {serializeDeviceInfo} from './serializeDeviceInfo';
import {serializeMediaStream} from './serializeMediaStream';
import {serializeNetworkInfo} from './serializeNetworkInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMedia(writer: SerializationWriter, media: Media | undefined = {}) : void {
            writer.writeObjectValueFromMethod("calleeDevice", media.calleeDevice as any, serializeDeviceInfo);
            writer.writeObjectValueFromMethod("calleeNetwork", media.calleeNetwork as any, serializeNetworkInfo);
            writer.writeObjectValueFromMethod("callerDevice", media.callerDevice as any, serializeDeviceInfo);
            writer.writeObjectValueFromMethod("callerNetwork", media.callerNetwork as any, serializeNetworkInfo);
            writer.writeStringValue("label", media.label);
            writer.writeStringValue("@odata.type", media.odataType);
            writer.writeCollectionOfObjectValuesFromMethod("streams", media.streams as any, serializeMediaStream);
}
