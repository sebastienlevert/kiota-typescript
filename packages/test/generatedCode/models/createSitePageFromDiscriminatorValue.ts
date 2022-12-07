import {SitePage} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSitePageFromDiscriminatorValue(parseNode: ParseNode | undefined) : SitePage {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SitePage();
}
