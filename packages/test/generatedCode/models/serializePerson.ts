import {Person} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeLocation} from './serializeLocation';
import {serializePersonDataSource} from './serializePersonDataSource';
import {serializePhone} from './serializePhone';
import {serializeRankedEmailAddress} from './serializeRankedEmailAddress';
import {serializeWebsite} from './serializeWebsite';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePerson(writer: SerializationWriter, person: Person | undefined = {}) : void {
        serializeEntity(writer, person)
            writer.writeStringValue("birthday", person.birthday);
            writer.writeStringValue("companyName", person.companyName);
            writer.writeStringValue("department", person.department);
            writer.writeStringValue("displayName", person.displayName);
            writer.writeCollectionOfObjectValuesFromMethod("emailAddresses", person.emailAddresses as any, serializeRankedEmailAddress);
            writer.writeStringValue("givenName", person.givenName);
            writer.writeBooleanValue("isFavorite", person.isFavorite);
            writer.writeStringValue("mailboxType", person.mailboxType);
            writer.writeStringValue("officeLocation", person.officeLocation);
            writer.writeStringValue("personNotes", person.personNotes);
            writer.writeStringValue("personType", person.personType);
            writer.writeCollectionOfObjectValuesFromMethod("phones", person.phones as any, serializePhone);
            writer.writeCollectionOfObjectValuesFromMethod("postalAddresses", person.postalAddresses as any, serializeLocation);
            writer.writeStringValue("profession", person.profession);
            writer.writeCollectionOfObjectValuesFromMethod("sources", person.sources as any, serializePersonDataSource);
            writer.writeStringValue("surname", person.surname);
            writer.writeStringValue("title", person.title);
            writer.writeStringValue("userPrincipalName", person.userPrincipalName);
            writer.writeCollectionOfObjectValuesFromMethod("websites", person.websites as any, serializeWebsite);
            writer.writeStringValue("yomiCompany", person.yomiCompany);
}
