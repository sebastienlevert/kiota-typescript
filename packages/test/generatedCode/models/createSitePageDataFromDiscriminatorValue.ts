import {SitePageData} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSitePageDataFromDiscriminatorValue(parseNode: ParseNode | undefined) : SitePageData {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SitePageData();
}
