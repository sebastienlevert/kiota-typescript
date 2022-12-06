import {EducationOutcome} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationOutcome(writer: SerializationWriter, educationOutcome: EducationOutcome | undefined = {}) : void {
        serializeEntity(writer, educationOutcome)
            writer.writeObjectValueFromMethod("lastModifiedBy", educationOutcome.lastModifiedBy as any, serializeIdentitySet);
            writer.writeDateValue("lastModifiedDateTime", educationOutcome.lastModifiedDateTime);
}
