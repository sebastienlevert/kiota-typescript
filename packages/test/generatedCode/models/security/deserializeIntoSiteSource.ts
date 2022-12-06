import {deserializeIntoSite} from '../deserializeIntoSite';
import {deserializeIntoDataSource} from './deserializeIntoDataSource';
import {SiteSource} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSiteSource(siteSource: SiteSource | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDataSource(siteSource),
        "site": n => { siteSource.site = n.getObject(deserializeIntoSite) as any ; },
    }
}
