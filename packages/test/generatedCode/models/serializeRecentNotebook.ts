import {RecentNotebook} from './index';
import {OnenoteSourceService} from './onenoteSourceService';
import {serializeRecentNotebookLinks} from './serializeRecentNotebookLinks';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRecentNotebook(writer: SerializationWriter, recentNotebook: RecentNotebook | undefined = {}) : void {
            writer.writeStringValue("displayName", recentNotebook.displayName);
            writer.writeDateValue("lastAccessedTime", recentNotebook.lastAccessedTime);
            writer.writeObjectValueFromMethod("links", recentNotebook.links as any, serializeRecentNotebookLinks);
            writer.writeStringValue("@odata.type", recentNotebook.odataType);
            writer.writeEnumValue<OnenoteSourceService>("sourceService", recentNotebook.sourceService);
}
