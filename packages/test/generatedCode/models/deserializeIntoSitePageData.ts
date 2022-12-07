import {SitePageData} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSitePageData(sitePageData: SitePageData | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
    }
}
