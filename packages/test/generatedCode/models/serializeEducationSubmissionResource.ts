import {EducationSubmissionResource} from './index';
import {serializeEducationResource} from './serializeEducationResource';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationSubmissionResource(writer: SerializationWriter, educationSubmissionResource: EducationSubmissionResource | undefined = {}) : void {
        serializeEntity(writer, educationSubmissionResource)
            writer.writeStringValue("assignmentResourceUrl", educationSubmissionResource.assignmentResourceUrl);
            writer.writeObjectValueFromMethod("resource", educationSubmissionResource.resource as any, serializeEducationResource);
}
