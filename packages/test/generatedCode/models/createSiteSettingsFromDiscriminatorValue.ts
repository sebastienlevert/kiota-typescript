import {SiteSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSiteSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : SiteSettings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SiteSettings();
}
