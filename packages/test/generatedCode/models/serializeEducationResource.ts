import {EducationResource} from './index';
import {serializeIdentitySet} from './serializeIdentitySet';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationResource(writer: SerializationWriter, educationResource: EducationResource | undefined = {}) : void {
            writer.writeObjectValueFromMethod("createdBy", educationResource.createdBy as any, serializeIdentitySet);
            writer.writeDateValue("createdDateTime", educationResource.createdDateTime);
            writer.writeStringValue("displayName", educationResource.displayName);
            writer.writeObjectValueFromMethod("lastModifiedBy", educationResource.lastModifiedBy as any, serializeIdentitySet);
            writer.writeDateValue("lastModifiedDateTime", educationResource.lastModifiedDateTime);
            writer.writeStringValue("@odata.type", educationResource.odataType);
}
