import {deserializeIntoDeviceInstallState} from './deserializeIntoDeviceInstallState';
import {deserializeIntoEBookInstallSummary} from './deserializeIntoEBookInstallSummary';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoManagedEBookAssignment} from './deserializeIntoManagedEBookAssignment';
import {deserializeIntoMimeContent} from './deserializeIntoMimeContent';
import {deserializeIntoUserInstallStateSummary} from './deserializeIntoUserInstallStateSummary';
import {ManagedEBook} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedEBook(managedEBook: ManagedEBook | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(managedEBook),
        "assignments": n => { managedEBook.assignments = n.getCollectionOfObjectValuesFromMethod(deserializeIntoManagedEBookAssignment) as any ; },
        "createdDateTime": n => { managedEBook.createdDateTime = n.getDateValue() as any ; },
        "description": n => { managedEBook.description = n.getStringValue() as any ; },
        "deviceStates": n => { managedEBook.deviceStates = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDeviceInstallState) as any ; },
        "displayName": n => { managedEBook.displayName = n.getStringValue() as any ; },
        "informationUrl": n => { managedEBook.informationUrl = n.getStringValue() as any ; },
        "installSummary": n => { managedEBook.installSummary = n.getObject(deserializeIntoEBookInstallSummary) as any ; },
        "largeCover": n => { managedEBook.largeCover = n.getObject(deserializeIntoMimeContent) as any ; },
        "lastModifiedDateTime": n => { managedEBook.lastModifiedDateTime = n.getDateValue() as any ; },
        "privacyInformationUrl": n => { managedEBook.privacyInformationUrl = n.getStringValue() as any ; },
        "publishedDateTime": n => { managedEBook.publishedDateTime = n.getDateValue() as any ; },
        "publisher": n => { managedEBook.publisher = n.getStringValue() as any ; },
        "userStateSummary": n => { managedEBook.userStateSummary = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUserInstallStateSummary) as any ; },
    }
}
