import {Site} from './index';
import {serializeBaseItem} from './serializeBaseItem';
import {serializeColumnDefinition} from './serializeColumnDefinition';
import {serializeContentType} from './serializeContentType';
import {serializeDeleted} from './serializeDeleted';
import {serializeDrive} from './serializeDrive';
import {serializeItemAnalytics} from './serializeItemAnalytics';
import {serializeList} from './serializeList';
import {serializeOnenote} from './serializeOnenote';
import {serializePermission} from './serializePermission';
import {serializeRichLongRunningOperation} from './serializeRichLongRunningOperation';
import {serializeRoot} from './serializeRoot';
import {serializeSharepointIds} from './serializeSharepointIds';
import {serializeSiteCollection} from './serializeSiteCollection';
import {serializeSitePage} from './serializeSitePage';
import {serializeSiteSettings} from './serializeSiteSettings';
import {serializeStore} from './termStore/serializeStore';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSite(writer: SerializationWriter, site: Site | undefined = {}) : void {
        serializeBaseItem(writer, site)
            writer.writeObjectValueFromMethod("analytics", site.analytics as any, serializeItemAnalytics);
            writer.writeCollectionOfObjectValuesFromMethod("columns", site.columns as any, serializeColumnDefinition);
            writer.writeCollectionOfObjectValuesFromMethod("contentTypes", site.contentTypes as any, serializeContentType);
            writer.writeObjectValueFromMethod("deleted", site.deleted as any, serializeDeleted);
            writer.writeStringValue("displayName", site.displayName);
            writer.writeObjectValueFromMethod("drive", site.drive as any, serializeDrive);
            writer.writeCollectionOfObjectValuesFromMethod("drives", site.drives as any, serializeDrive);
            writer.writeCollectionOfObjectValuesFromMethod("externalColumns", site.externalColumns as any, serializeColumnDefinition);
            writer.writeCollectionOfObjectValuesFromMethod("items", site.items as any, serializeBaseItem);
            writer.writeCollectionOfObjectValuesFromMethod("lists", site.lists as any, serializeList);
            writer.writeObjectValueFromMethod("onenote", site.onenote as any, serializeOnenote);
            writer.writeCollectionOfObjectValuesFromMethod("operations", site.operations as any, serializeRichLongRunningOperation);
            writer.writeCollectionOfObjectValuesFromMethod("pages", site.pages as any, serializeSitePage);
            writer.writeCollectionOfObjectValuesFromMethod("permissions", site.permissions as any, serializePermission);
            writer.writeObjectValueFromMethod("root", site.root as any, serializeRoot);
            writer.writeObjectValueFromMethod("settings", site.settings as any, serializeSiteSettings);
            writer.writeObjectValueFromMethod("sharepointIds", site.sharepointIds as any, serializeSharepointIds);
            writer.writeObjectValueFromMethod("siteCollection", site.siteCollection as any, serializeSiteCollection);
            writer.writeCollectionOfObjectValuesFromMethod("sites", site.sites as any, serializeSite);
            writer.writeObjectValueFromMethod("termStore", site.termStore as any, serializeStore);
}
