import {OnenoteResource} from './index';
import {serializeOnenoteEntityBaseModel} from './serializeOnenoteEntityBaseModel';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOnenoteResource(writer: SerializationWriter, onenoteResource: OnenoteResource | undefined = {}) : void {
        serializeOnenoteEntityBaseModel(writer, onenoteResource)
            writer.writeStringValue("content", onenoteResource.content);
            writer.writeStringValue("contentUrl", onenoteResource.contentUrl);
}
