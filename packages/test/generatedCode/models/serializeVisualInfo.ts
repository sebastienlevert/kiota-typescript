import {VisualInfo} from './index';
import {serializeImageInfo} from './serializeImageInfo';
import {serializeJson} from './serializeJson';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeVisualInfo(writer: SerializationWriter, visualInfo: VisualInfo | undefined = {}) : void {
            writer.writeObjectValueFromMethod("attribution", visualInfo.attribution as any, serializeImageInfo);
            writer.writeStringValue("backgroundColor", visualInfo.backgroundColor);
            writer.writeObjectValueFromMethod("content", visualInfo.content as any, serializeJson);
            writer.writeStringValue("description", visualInfo.description);
            writer.writeStringValue("displayText", visualInfo.displayText);
}
