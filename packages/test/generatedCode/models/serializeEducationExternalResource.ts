import {EducationExternalResource} from './index';
import {serializeEducationResource} from './serializeEducationResource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationExternalResource(writer: SerializationWriter, educationExternalResource: EducationExternalResource | undefined = {}) : void {
        serializeEducationResource(writer, educationExternalResource)
            writer.writeStringValue("webUrl", educationExternalResource.webUrl);
}
