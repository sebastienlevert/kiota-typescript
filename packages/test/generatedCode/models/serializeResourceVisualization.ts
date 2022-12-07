import {ResourceVisualization} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeResourceVisualization(writer: SerializationWriter, resourceVisualization: ResourceVisualization | undefined = {}) : void {
            writer.writeStringValue("containerDisplayName", resourceVisualization.containerDisplayName);
            writer.writeStringValue("containerType", resourceVisualization.containerType);
            writer.writeStringValue("containerWebUrl", resourceVisualization.containerWebUrl);
            writer.writeStringValue("mediaType", resourceVisualization.mediaType);
            writer.writeStringValue("previewImageUrl", resourceVisualization.previewImageUrl);
            writer.writeStringValue("previewText", resourceVisualization.previewText);
            writer.writeStringValue("title", resourceVisualization.title);
            writer.writeStringValue("type", resourceVisualization.type);
}
