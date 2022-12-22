import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoMessage} from './deserializeIntoMessage';
import {deserializeIntoMessageRule} from './deserializeIntoMessageRule';
import {deserializeIntoMultiValueLegacyExtendedProperty} from './deserializeIntoMultiValueLegacyExtendedProperty';
import {deserializeIntoSingleValueLegacyExtendedProperty} from './deserializeIntoSingleValueLegacyExtendedProperty';
import {MailFolder} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMailFolder(mailFolder: MailFolder | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(mailFolder),
        "childFolderCount": n => { mailFolder.childFolderCount = n.getNumberValue() as any ; },
        "childFolders": n => { mailFolder.childFolders = n.getCollectionOfObjectValues(deserializeIntoMailFolder) as any ; },
        "displayName": n => { mailFolder.displayName = n.getStringValue() as any ; },
        "isHidden": n => { mailFolder.isHidden = n.getBooleanValue() as any ; },
        "messageRules": n => { mailFolder.messageRules = n.getCollectionOfObjectValues(deserializeIntoMessageRule) as any ; },
        "messages": n => { mailFolder.messages = n.getCollectionOfObjectValues(deserializeIntoMessage) as any ; },
        "multiValueExtendedProperties": n => { mailFolder.multiValueExtendedProperties = n.getCollectionOfObjectValues(deserializeIntoMultiValueLegacyExtendedProperty) as any ; },
        "parentFolderId": n => { mailFolder.parentFolderId = n.getStringValue() as any ; },
        "singleValueExtendedProperties": n => { mailFolder.singleValueExtendedProperties = n.getCollectionOfObjectValues(deserializeIntoSingleValueLegacyExtendedProperty) as any ; },
        "totalItemCount": n => { mailFolder.totalItemCount = n.getNumberValue() as any ; },
        "unreadItemCount": n => { mailFolder.unreadItemCount = n.getNumberValue() as any ; },
    }
}
