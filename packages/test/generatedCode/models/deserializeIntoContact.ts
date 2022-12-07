import {deserializeIntoExtension} from './deserializeIntoExtension';
import {deserializeIntoFollowupFlag} from './deserializeIntoFollowupFlag';
import {deserializeIntoMultiValueLegacyExtendedProperty} from './deserializeIntoMultiValueLegacyExtendedProperty';
import {deserializeIntoOutlookItem} from './deserializeIntoOutlookItem';
import {deserializeIntoPhone} from './deserializeIntoPhone';
import {deserializeIntoPhysicalAddress} from './deserializeIntoPhysicalAddress';
import {deserializeIntoProfilePhoto} from './deserializeIntoProfilePhoto';
import {deserializeIntoSingleValueLegacyExtendedProperty} from './deserializeIntoSingleValueLegacyExtendedProperty';
import {deserializeIntoTypedEmailAddress} from './deserializeIntoTypedEmailAddress';
import {deserializeIntoWebsite} from './deserializeIntoWebsite';
import {Contact} from './index';
import {DateOnly, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoContact(contact: Contact | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoOutlookItem(contact),
        "assistantName": n => { contact.assistantName = n.getStringValue() as any ; },
        "birthday": n => { contact.birthday = n.getDateValue() as any ; },
        "children": n => { contact.children = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "companyName": n => { contact.companyName = n.getStringValue() as any ; },
        "department": n => { contact.department = n.getStringValue() as any ; },
        "displayName": n => { contact.displayName = n.getStringValue() as any ; },
        "emailAddresses": n => { contact.emailAddresses = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTypedEmailAddress) as any ; },
        "extensions": n => { contact.extensions = n.getCollectionOfObjectValuesFromMethod(deserializeIntoExtension) as any ; },
        "fileAs": n => { contact.fileAs = n.getStringValue() as any ; },
        "flag": n => { contact.flag = n.getObject(deserializeIntoFollowupFlag) as any ; },
        "gender": n => { contact.gender = n.getStringValue() as any ; },
        "generation": n => { contact.generation = n.getStringValue() as any ; },
        "givenName": n => { contact.givenName = n.getStringValue() as any ; },
        "imAddresses": n => { contact.imAddresses = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "initials": n => { contact.initials = n.getStringValue() as any ; },
        "isFavorite": n => { contact.isFavorite = n.getBooleanValue() as any ; },
        "jobTitle": n => { contact.jobTitle = n.getStringValue() as any ; },
        "manager": n => { contact.manager = n.getStringValue() as any ; },
        "middleName": n => { contact.middleName = n.getStringValue() as any ; },
        "multiValueExtendedProperties": n => { contact.multiValueExtendedProperties = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMultiValueLegacyExtendedProperty) as any ; },
        "nickName": n => { contact.nickName = n.getStringValue() as any ; },
        "officeLocation": n => { contact.officeLocation = n.getStringValue() as any ; },
        "parentFolderId": n => { contact.parentFolderId = n.getStringValue() as any ; },
        "personalNotes": n => { contact.personalNotes = n.getStringValue() as any ; },
        "phones": n => { contact.phones = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPhone) as any ; },
        "photo": n => { contact.photo = n.getObject(deserializeIntoProfilePhoto) as any ; },
        "postalAddresses": n => { contact.postalAddresses = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPhysicalAddress) as any ; },
        "profession": n => { contact.profession = n.getStringValue() as any ; },
        "singleValueExtendedProperties": n => { contact.singleValueExtendedProperties = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSingleValueLegacyExtendedProperty) as any ; },
        "spouseName": n => { contact.spouseName = n.getStringValue() as any ; },
        "surname": n => { contact.surname = n.getStringValue() as any ; },
        "title": n => { contact.title = n.getStringValue() as any ; },
        "websites": n => { contact.websites = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWebsite) as any ; },
        "weddingAnniversary": n => { contact.weddingAnniversary = n.getDateOnlyValue() as any ; },
        "yomiCompanyName": n => { contact.yomiCompanyName = n.getStringValue() as any ; },
        "yomiGivenName": n => { contact.yomiGivenName = n.getStringValue() as any ; },
        "yomiSurname": n => { contact.yomiSurname = n.getStringValue() as any ; },
    }
}
