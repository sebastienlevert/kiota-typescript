import {EducationExternalSource} from './educationExternalSource';
import {EducationOrganization} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationOrganization(writer: SerializationWriter, educationOrganization: EducationOrganization | undefined = {}) : void {
        serializeEntity(writer, educationOrganization)
            writer.writeStringValue("description", educationOrganization.description);
            writer.writeStringValue("displayName", educationOrganization.displayName);
            writer.writeEnumValue<EducationExternalSource>("externalSource", educationOrganization.externalSource);
            writer.writeStringValue("externalSourceDetail", educationOrganization.externalSourceDetail);
}
