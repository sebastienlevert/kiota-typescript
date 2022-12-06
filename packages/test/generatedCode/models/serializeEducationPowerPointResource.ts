import {EducationPowerPointResource} from './index';
import {serializeEducationResource} from './serializeEducationResource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationPowerPointResource(writer: SerializationWriter, educationPowerPointResource: EducationPowerPointResource | undefined = {}) : void {
        serializeEducationResource(writer, educationPowerPointResource)
            writer.writeStringValue("fileUrl", educationPowerPointResource.fileUrl);
}
