import {deserializeIntoEmailAddress} from './deserializeIntoEmailAddress';
import {deserializeIntoExtension} from './deserializeIntoExtension';
import {deserializeIntoMultiValueLegacyExtendedProperty} from './deserializeIntoMultiValueLegacyExtendedProperty';
import {deserializeIntoOutlookItem} from './deserializeIntoOutlookItem';
import {deserializeIntoPhysicalAddress} from './deserializeIntoPhysicalAddress';
import {deserializeIntoProfilePhoto} from './deserializeIntoProfilePhoto';
import {deserializeIntoSingleValueLegacyExtendedProperty} from './deserializeIntoSingleValueLegacyExtendedProperty';
import {Contact} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoContact(contact: Contact | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoOutlookItem(contact),
        "assistantName": n => { contact.assistantName = n.getStringValue() as any ; },
        "birthday": n => { contact.birthday = n.getDateValue() as any ; },
        "businessAddress": n => { contact.businessAddress = n.getObject(deserializeIntoPhysicalAddress) as any ; },
        "businessHomePage": n => { contact.businessHomePage = n.getStringValue() as any ; },
        "businessPhones": n => { contact.businessPhones = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "children": n => { contact.children = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "companyName": n => { contact.companyName = n.getStringValue() as any ; },
        "department": n => { contact.department = n.getStringValue() as any ; },
        "displayName": n => { contact.displayName = n.getStringValue() as any ; },
        "emailAddresses": n => { contact.emailAddresses = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEmailAddress) as any ; },
        "extensions": n => { contact.extensions = n.getCollectionOfObjectValuesFromMethod(deserializeIntoExtension) as any ; },
        "fileAs": n => { contact.fileAs = n.getStringValue() as any ; },
        "generation": n => { contact.generation = n.getStringValue() as any ; },
        "givenName": n => { contact.givenName = n.getStringValue() as any ; },
        "homeAddress": n => { contact.homeAddress = n.getObject(deserializeIntoPhysicalAddress) as any ; },
        "homePhones": n => { contact.homePhones = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "imAddresses": n => { contact.imAddresses = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "initials": n => { contact.initials = n.getStringValue() as any ; },
        "jobTitle": n => { contact.jobTitle = n.getStringValue() as any ; },
        "manager": n => { contact.manager = n.getStringValue() as any ; },
        "middleName": n => { contact.middleName = n.getStringValue() as any ; },
        "mobilePhone": n => { contact.mobilePhone = n.getStringValue() as any ; },
        "multiValueExtendedProperties": n => { contact.multiValueExtendedProperties = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMultiValueLegacyExtendedProperty) as any ; },
        "nickName": n => { contact.nickName = n.getStringValue() as any ; },
        "officeLocation": n => { contact.officeLocation = n.getStringValue() as any ; },
        "otherAddress": n => { contact.otherAddress = n.getObject(deserializeIntoPhysicalAddress) as any ; },
        "parentFolderId": n => { contact.parentFolderId = n.getStringValue() as any ; },
        "personalNotes": n => { contact.personalNotes = n.getStringValue() as any ; },
        "photo": n => { contact.photo = n.getObject(deserializeIntoProfilePhoto) as any ; },
        "profession": n => { contact.profession = n.getStringValue() as any ; },
        "singleValueExtendedProperties": n => { contact.singleValueExtendedProperties = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSingleValueLegacyExtendedProperty) as any ; },
        "spouseName": n => { contact.spouseName = n.getStringValue() as any ; },
        "surname": n => { contact.surname = n.getStringValue() as any ; },
        "title": n => { contact.title = n.getStringValue() as any ; },
        "yomiCompanyName": n => { contact.yomiCompanyName = n.getStringValue() as any ; },
        "yomiGivenName": n => { contact.yomiGivenName = n.getStringValue() as any ; },
        "yomiSurname": n => { contact.yomiSurname = n.getStringValue() as any ; },
    }
}
