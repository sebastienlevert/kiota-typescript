import {EducationAssignmentResource} from './index';
import {serializeEducationResource} from './serializeEducationResource';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationAssignmentResource(writer: SerializationWriter, educationAssignmentResource: EducationAssignmentResource | undefined = {}) : void {
        serializeEntity(writer, educationAssignmentResource)
            writer.writeBooleanValue("distributeForStudentWork", educationAssignmentResource.distributeForStudentWork);
            writer.writeObjectValueFromMethod("resource", educationAssignmentResource.resource as any, serializeEducationResource);
}
