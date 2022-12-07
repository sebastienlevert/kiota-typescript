import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoMessage} from './deserializeIntoMessage';
import {deserializeIntoMessageRule} from './deserializeIntoMessageRule';
import {deserializeIntoMultiValueLegacyExtendedProperty} from './deserializeIntoMultiValueLegacyExtendedProperty';
import {deserializeIntoSingleValueLegacyExtendedProperty} from './deserializeIntoSingleValueLegacyExtendedProperty';
import {deserializeIntoUserConfiguration} from './deserializeIntoUserConfiguration';
import {MailFolder} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMailFolder(mailFolder: MailFolder | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(mailFolder),
        "childFolderCount": n => { mailFolder.childFolderCount = n.getNumberValue() as any ; },
        "childFolders": n => { mailFolder.childFolders = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMailFolder) as any ; },
        "displayName": n => { mailFolder.displayName = n.getStringValue() as any ; },
        "isHidden": n => { mailFolder.isHidden = n.getBooleanValue() as any ; },
        "messageRules": n => { mailFolder.messageRules = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMessageRule) as any ; },
        "messages": n => { mailFolder.messages = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMessage) as any ; },
        "multiValueExtendedProperties": n => { mailFolder.multiValueExtendedProperties = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMultiValueLegacyExtendedProperty) as any ; },
        "parentFolderId": n => { mailFolder.parentFolderId = n.getStringValue() as any ; },
        "singleValueExtendedProperties": n => { mailFolder.singleValueExtendedProperties = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSingleValueLegacyExtendedProperty) as any ; },
        "totalItemCount": n => { mailFolder.totalItemCount = n.getNumberValue() as any ; },
        "unreadItemCount": n => { mailFolder.unreadItemCount = n.getNumberValue() as any ; },
        "userConfigurations": n => { mailFolder.userConfigurations = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUserConfiguration) as any ; },
        "wellKnownName": n => { mailFolder.wellKnownName = n.getStringValue() as any ; },
    }
}
