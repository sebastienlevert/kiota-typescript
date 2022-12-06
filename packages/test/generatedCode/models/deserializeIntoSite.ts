import {deserializeIntoBaseItem} from './deserializeIntoBaseItem';
import {deserializeIntoColumnDefinition} from './deserializeIntoColumnDefinition';
import {deserializeIntoContentType} from './deserializeIntoContentType';
import {deserializeIntoDrive} from './deserializeIntoDrive';
import {deserializeIntoItemAnalytics} from './deserializeIntoItemAnalytics';
import {deserializeIntoList} from './deserializeIntoList';
import {deserializeIntoOnenote} from './deserializeIntoOnenote';
import {deserializeIntoPermission} from './deserializeIntoPermission';
import {deserializeIntoPublicError} from './deserializeIntoPublicError';
import {deserializeIntoRichLongRunningOperation} from './deserializeIntoRichLongRunningOperation';
import {deserializeIntoRoot} from './deserializeIntoRoot';
import {deserializeIntoSharepointIds} from './deserializeIntoSharepointIds';
import {deserializeIntoSiteCollection} from './deserializeIntoSiteCollection';
import {Site} from './index';
import {deserializeIntoStore} from './termStore/deserializeIntoStore';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSite(site: Site | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseItem(site),
        "analytics": n => { site.analytics = n.getObject(deserializeIntoItemAnalytics) as any ; },
        "columns": n => { site.columns = n.getCollectionOfObjectValuesFromMethod(deserializeIntoColumnDefinition) as any ; },
        "contentTypes": n => { site.contentTypes = n.getCollectionOfObjectValuesFromMethod(deserializeIntoContentType) as any ; },
        "displayName": n => { site.displayName = n.getStringValue() as any ; },
        "drive": n => { site.drive = n.getObject(deserializeIntoDrive) as any ; },
        "drives": n => { site.drives = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDrive) as any ; },
        "error": n => { site.error_escaped = n.getObject(deserializeIntoPublicError) as any ; },
        "externalColumns": n => { site.externalColumns = n.getCollectionOfObjectValuesFromMethod(deserializeIntoColumnDefinition) as any ; },
        "items": n => { site.items = n.getCollectionOfObjectValuesFromMethod(deserializeIntoBaseItem) as any ; },
        "lists": n => { site.lists = n.getCollectionOfObjectValuesFromMethod(deserializeIntoList) as any ; },
        "onenote": n => { site.onenote = n.getObject(deserializeIntoOnenote) as any ; },
        "operations": n => { site.operations = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRichLongRunningOperation) as any ; },
        "permissions": n => { site.permissions = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPermission) as any ; },
        "root": n => { site.root = n.getObject(deserializeIntoRoot) as any ; },
        "sharepointIds": n => { site.sharepointIds = n.getObject(deserializeIntoSharepointIds) as any ; },
        "siteCollection": n => { site.siteCollection = n.getObject(deserializeIntoSiteCollection) as any ; },
        "sites": n => { site.sites = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSite) as any ; },
        "termStore": n => { site.termStore = n.getObject(deserializeIntoStore) as any ; },
        "termStores": n => { site.termStores = n.getCollectionOfObjectValuesFromMethod(deserializeIntoStore) as any ; },
    }
}
