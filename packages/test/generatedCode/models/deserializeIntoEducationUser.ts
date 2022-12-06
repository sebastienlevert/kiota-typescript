import {deserializeIntoAssignedLicense} from './deserializeIntoAssignedLicense';
import {deserializeIntoAssignedPlan} from './deserializeIntoAssignedPlan';
import {deserializeIntoEducationAssignment} from './deserializeIntoEducationAssignment';
import {deserializeIntoEducationClass} from './deserializeIntoEducationClass';
import {deserializeIntoEducationOnPremisesInfo} from './deserializeIntoEducationOnPremisesInfo';
import {deserializeIntoEducationRubric} from './deserializeIntoEducationRubric';
import {deserializeIntoEducationSchool} from './deserializeIntoEducationSchool';
import {deserializeIntoEducationStudent} from './deserializeIntoEducationStudent';
import {deserializeIntoEducationTeacher} from './deserializeIntoEducationTeacher';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {deserializeIntoPasswordProfile} from './deserializeIntoPasswordProfile';
import {deserializeIntoPhysicalAddress} from './deserializeIntoPhysicalAddress';
import {deserializeIntoProvisionedPlan} from './deserializeIntoProvisionedPlan';
import {deserializeIntoRelatedContact} from './deserializeIntoRelatedContact';
import {deserializeIntoUser} from './deserializeIntoUser';
import {EducationExternalSource} from './educationExternalSource';
import {EducationUserRole} from './educationUserRole';
import {EducationUser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationUser(educationUser: EducationUser | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(educationUser),
        "accountEnabled": n => { educationUser.accountEnabled = n.getBooleanValue() as any ; },
        "assignedLicenses": n => { educationUser.assignedLicenses = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAssignedLicense) as any ; },
        "assignedPlans": n => { educationUser.assignedPlans = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAssignedPlan) as any ; },
        "assignments": n => { educationUser.assignments = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEducationAssignment) as any ; },
        "businessPhones": n => { educationUser.businessPhones = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "classes": n => { educationUser.classes = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEducationClass) as any ; },
        "createdBy": n => { educationUser.createdBy = n.getObject(deserializeIntoIdentitySet) as any ; },
        "department": n => { educationUser.department = n.getStringValue() as any ; },
        "displayName": n => { educationUser.displayName = n.getStringValue() as any ; },
        "externalSource": n => { educationUser.externalSource = n.getEnumValue<EducationExternalSource>(EducationExternalSource) as any ; },
        "externalSourceDetail": n => { educationUser.externalSourceDetail = n.getStringValue() as any ; },
        "givenName": n => { educationUser.givenName = n.getStringValue() as any ; },
        "mail": n => { educationUser.mail = n.getStringValue() as any ; },
        "mailingAddress": n => { educationUser.mailingAddress = n.getObject(deserializeIntoPhysicalAddress) as any ; },
        "mailNickname": n => { educationUser.mailNickname = n.getStringValue() as any ; },
        "middleName": n => { educationUser.middleName = n.getStringValue() as any ; },
        "mobilePhone": n => { educationUser.mobilePhone = n.getStringValue() as any ; },
        "officeLocation": n => { educationUser.officeLocation = n.getStringValue() as any ; },
        "onPremisesInfo": n => { educationUser.onPremisesInfo = n.getObject(deserializeIntoEducationOnPremisesInfo) as any ; },
        "passwordPolicies": n => { educationUser.passwordPolicies = n.getStringValue() as any ; },
        "passwordProfile": n => { educationUser.passwordProfile = n.getObject(deserializeIntoPasswordProfile) as any ; },
        "preferredLanguage": n => { educationUser.preferredLanguage = n.getStringValue() as any ; },
        "primaryRole": n => { educationUser.primaryRole = n.getEnumValue<EducationUserRole>(EducationUserRole) as any ; },
        "provisionedPlans": n => { educationUser.provisionedPlans = n.getCollectionOfObjectValuesFromMethod(deserializeIntoProvisionedPlan) as any ; },
        "refreshTokensValidFromDateTime": n => { educationUser.refreshTokensValidFromDateTime = n.getDateValue() as any ; },
        "relatedContacts": n => { educationUser.relatedContacts = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRelatedContact) as any ; },
        "residenceAddress": n => { educationUser.residenceAddress = n.getObject(deserializeIntoPhysicalAddress) as any ; },
        "rubrics": n => { educationUser.rubrics = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEducationRubric) as any ; },
        "schools": n => { educationUser.schools = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEducationSchool) as any ; },
        "showInAddressList": n => { educationUser.showInAddressList = n.getBooleanValue() as any ; },
        "student": n => { educationUser.student = n.getObject(deserializeIntoEducationStudent) as any ; },
        "surname": n => { educationUser.surname = n.getStringValue() as any ; },
        "taughtClasses": n => { educationUser.taughtClasses = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEducationClass) as any ; },
        "teacher": n => { educationUser.teacher = n.getObject(deserializeIntoEducationTeacher) as any ; },
        "usageLocation": n => { educationUser.usageLocation = n.getStringValue() as any ; },
        "user": n => { educationUser.user = n.getObject(deserializeIntoUser) as any ; },
        "userPrincipalName": n => { educationUser.userPrincipalName = n.getStringValue() as any ; },
        "userType": n => { educationUser.userType = n.getStringValue() as any ; },
    }
}
