import {Person} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeLocation} from './serializeLocation';
import {serializePersonType} from './serializePersonType';
import {serializePhone} from './serializePhone';
import {serializeScoredEmailAddress} from './serializeScoredEmailAddress';
import {serializeWebsite} from './serializeWebsite';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePerson(writer: SerializationWriter, person: Person | undefined = {}) : void {
        serializeEntity(writer, person)
            writer.writeStringValue("birthday", person.birthday);
            writer.writeStringValue("companyName", person.companyName);
            writer.writeStringValue("department", person.department);
            writer.writeStringValue("displayName", person.displayName);
            writer.writeStringValue("givenName", person.givenName);
            writer.writeStringValue("imAddress", person.imAddress);
            writer.writeBooleanValue("isFavorite", person.isFavorite);
            writer.writeStringValue("jobTitle", person.jobTitle);
            writer.writeStringValue("officeLocation", person.officeLocation);
            writer.writeStringValue("personNotes", person.personNotes);
            writer.writeObjectValueFromMethod("personType", person.personType as any, serializePersonType);
            writer.writeCollectionOfObjectValuesFromMethod("phones", person.phones as any, serializePhone);
            writer.writeCollectionOfObjectValuesFromMethod("postalAddresses", person.postalAddresses as any, serializeLocation);
            writer.writeStringValue("profession", person.profession);
            writer.writeCollectionOfObjectValuesFromMethod("scoredEmailAddresses", person.scoredEmailAddresses as any, serializeScoredEmailAddress);
            writer.writeStringValue("surname", person.surname);
            writer.writeStringValue("userPrincipalName", person.userPrincipalName);
            writer.writeCollectionOfObjectValuesFromMethod("websites", person.websites as any, serializeWebsite);
            writer.writeStringValue("yomiCompany", person.yomiCompany);
}
