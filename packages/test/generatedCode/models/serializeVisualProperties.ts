import {VisualProperties} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeVisualProperties(writer: SerializationWriter, visualProperties: VisualProperties | undefined = {}) : void {
            writer.writeStringValue("body", visualProperties.body);
            writer.writeStringValue("title", visualProperties.title);
}
