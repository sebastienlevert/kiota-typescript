import {ManagedEBook} from './index';
import {serializeDeviceInstallState} from './serializeDeviceInstallState';
import {serializeEBookInstallSummary} from './serializeEBookInstallSummary';
import {serializeEntity} from './serializeEntity';
import {serializeManagedEBookAssignment} from './serializeManagedEBookAssignment';
import {serializeMimeContent} from './serializeMimeContent';
import {serializeUserInstallStateSummary} from './serializeUserInstallStateSummary';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedEBook(writer: SerializationWriter, managedEBook: ManagedEBook | undefined = {}) : void {
        serializeEntity(writer, managedEBook)
            writer.writeCollectionOfObjectValuesFromMethod("assignments", managedEBook.assignments as any, serializeManagedEBookAssignment);
            writer.writeDateValue("createdDateTime", managedEBook.createdDateTime);
            writer.writeStringValue("description", managedEBook.description);
            writer.writeCollectionOfObjectValuesFromMethod("deviceStates", managedEBook.deviceStates as any, serializeDeviceInstallState);
            writer.writeStringValue("displayName", managedEBook.displayName);
            writer.writeStringValue("informationUrl", managedEBook.informationUrl);
            writer.writeObjectValueFromMethod("installSummary", managedEBook.installSummary as any, serializeEBookInstallSummary);
            writer.writeObjectValueFromMethod("largeCover", managedEBook.largeCover as any, serializeMimeContent);
            writer.writeDateValue("lastModifiedDateTime", managedEBook.lastModifiedDateTime);
            writer.writeStringValue("privacyInformationUrl", managedEBook.privacyInformationUrl);
            writer.writeDateValue("publishedDateTime", managedEBook.publishedDateTime);
            writer.writeStringValue("publisher", managedEBook.publisher);
            writer.writeCollectionOfObjectValuesFromMethod("userStateSummary", managedEBook.userStateSummary as any, serializeUserInstallStateSummary);
}
