import {MailFolder} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MailSearchFolder extends MailFolder, Partial<Parsable> {
    /** The OData query to filter the messages. */
    filterQuery?: string;
    /** Indicates how the mailbox folder hierarchy should be traversed in the search. true means that a deep search should be done to include child folders in the hierarchy of each folder explicitly specified in sourceFolderIds. false means a shallow search of only each of the folders explicitly specified in sourceFolderIds. */
    includeNestedFolders?: boolean;
    /** Indicates whether a search folder is editable using REST APIs. */
    isSupported?: boolean;
    /** The mailbox folders that should be mined. */
    sourceFolderIds?: string[];
}
