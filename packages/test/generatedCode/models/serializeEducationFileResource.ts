import {EducationFileResource} from './index';
import {serializeEducationResource} from './serializeEducationResource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationFileResource(writer: SerializationWriter, educationFileResource: EducationFileResource | undefined = {}) : void {
        serializeEducationResource(writer, educationFileResource)
            writer.writeStringValue("fileUrl", educationFileResource.fileUrl);
}
