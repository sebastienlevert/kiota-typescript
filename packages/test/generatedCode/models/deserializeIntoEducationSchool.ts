import {deserializeIntoAdministrativeUnit} from './deserializeIntoAdministrativeUnit';
import {deserializeIntoEducationClass} from './deserializeIntoEducationClass';
import {deserializeIntoEducationOrganization} from './deserializeIntoEducationOrganization';
import {deserializeIntoEducationUser} from './deserializeIntoEducationUser';
import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {deserializeIntoPhysicalAddress} from './deserializeIntoPhysicalAddress';
import {EducationSchool} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationSchool(educationSchool: EducationSchool | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEducationOrganization(educationSchool),
        "address": n => { educationSchool.address = n.getObject(deserializeIntoPhysicalAddress) as any ; },
        "administrativeUnit": n => { educationSchool.administrativeUnit = n.getObject(deserializeIntoAdministrativeUnit) as any ; },
        "classes": n => { educationSchool.classes = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEducationClass) as any ; },
        "createdBy": n => { educationSchool.createdBy = n.getObject(deserializeIntoIdentitySet) as any ; },
        "externalId": n => { educationSchool.externalId = n.getStringValue() as any ; },
        "externalPrincipalId": n => { educationSchool.externalPrincipalId = n.getStringValue() as any ; },
        "fax": n => { educationSchool.fax = n.getStringValue() as any ; },
        "highestGrade": n => { educationSchool.highestGrade = n.getStringValue() as any ; },
        "lowestGrade": n => { educationSchool.lowestGrade = n.getStringValue() as any ; },
        "phone": n => { educationSchool.phone = n.getStringValue() as any ; },
        "principalEmail": n => { educationSchool.principalEmail = n.getStringValue() as any ; },
        "principalName": n => { educationSchool.principalName = n.getStringValue() as any ; },
        "schoolNumber": n => { educationSchool.schoolNumber = n.getStringValue() as any ; },
        "users": n => { educationSchool.users = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEducationUser) as any ; },
    }
}
