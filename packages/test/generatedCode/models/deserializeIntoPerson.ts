import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoLocation} from './deserializeIntoLocation';
import {deserializeIntoPersonType} from './deserializeIntoPersonType';
import {deserializeIntoPhone} from './deserializeIntoPhone';
import {deserializeIntoScoredEmailAddress} from './deserializeIntoScoredEmailAddress';
import {deserializeIntoWebsite} from './deserializeIntoWebsite';
import {Person} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPerson(person: Person | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(person),
        "birthday": n => { person.birthday = n.getStringValue() as any ; },
        "companyName": n => { person.companyName = n.getStringValue() as any ; },
        "department": n => { person.department = n.getStringValue() as any ; },
        "displayName": n => { person.displayName = n.getStringValue() as any ; },
        "givenName": n => { person.givenName = n.getStringValue() as any ; },
        "imAddress": n => { person.imAddress = n.getStringValue() as any ; },
        "isFavorite": n => { person.isFavorite = n.getBooleanValue() as any ; },
        "jobTitle": n => { person.jobTitle = n.getStringValue() as any ; },
        "officeLocation": n => { person.officeLocation = n.getStringValue() as any ; },
        "personNotes": n => { person.personNotes = n.getStringValue() as any ; },
        "personType": n => { person.personType = n.getObject(deserializeIntoPersonType) as any ; },
        "phones": n => { person.phones = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPhone) as any ; },
        "postalAddresses": n => { person.postalAddresses = n.getCollectionOfObjectValuesFromMethod(deserializeIntoLocation) as any ; },
        "profession": n => { person.profession = n.getStringValue() as any ; },
        "scoredEmailAddresses": n => { person.scoredEmailAddresses = n.getCollectionOfObjectValuesFromMethod(deserializeIntoScoredEmailAddress) as any ; },
        "surname": n => { person.surname = n.getStringValue() as any ; },
        "userPrincipalName": n => { person.userPrincipalName = n.getStringValue() as any ; },
        "websites": n => { person.websites = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWebsite) as any ; },
        "yomiCompany": n => { person.yomiCompany = n.getStringValue() as any ; },
    }
}
