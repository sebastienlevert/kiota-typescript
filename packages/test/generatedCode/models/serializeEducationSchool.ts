import {EducationSchool} from './index';
import {serializeAdministrativeUnit} from './serializeAdministrativeUnit';
import {serializeEducationClass} from './serializeEducationClass';
import {serializeEducationOrganization} from './serializeEducationOrganization';
import {serializeEducationUser} from './serializeEducationUser';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializePhysicalAddress} from './serializePhysicalAddress';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationSchool(writer: SerializationWriter, educationSchool: EducationSchool | undefined = {}) : void {
        serializeEducationOrganization(writer, educationSchool)
            writer.writeObjectValueFromMethod("address", educationSchool.address as any, serializePhysicalAddress);
            writer.writeObjectValueFromMethod("administrativeUnit", educationSchool.administrativeUnit as any, serializeAdministrativeUnit);
            writer.writeCollectionOfObjectValuesFromMethod("classes", educationSchool.classes as any, serializeEducationClass);
            writer.writeObjectValueFromMethod("createdBy", educationSchool.createdBy as any, serializeIdentitySet);
            writer.writeStringValue("externalId", educationSchool.externalId);
            writer.writeStringValue("externalPrincipalId", educationSchool.externalPrincipalId);
            writer.writeStringValue("fax", educationSchool.fax);
            writer.writeStringValue("highestGrade", educationSchool.highestGrade);
            writer.writeStringValue("lowestGrade", educationSchool.lowestGrade);
            writer.writeStringValue("phone", educationSchool.phone);
            writer.writeStringValue("principalEmail", educationSchool.principalEmail);
            writer.writeStringValue("principalName", educationSchool.principalName);
            writer.writeStringValue("schoolNumber", educationSchool.schoolNumber);
            writer.writeCollectionOfObjectValuesFromMethod("users", educationSchool.users as any, serializeEducationUser);
}
