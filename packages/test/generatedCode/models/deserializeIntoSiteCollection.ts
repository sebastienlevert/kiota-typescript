import {deserializeIntoRoot} from './deserializeIntoRoot';
import {SiteCollection} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSiteCollection(siteCollection: SiteCollection | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "dataLocationCode": n => { siteCollection.dataLocationCode = n.getStringValue() as any ; },
        "hostname": n => { siteCollection.hostname = n.getStringValue() as any ; },
        "root": n => { siteCollection.root = n.getObject(deserializeIntoRoot) as any ; },
    }
}
