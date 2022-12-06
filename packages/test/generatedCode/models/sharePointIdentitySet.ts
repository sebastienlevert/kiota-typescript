import {Identity, IdentitySet, SharePointIdentity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SharePointIdentitySet extends IdentitySet, Partial<Parsable> {
    /** The group associated with this action. Optional. */
    group?: Identity;
    /** The SharePoint group associated with this action. Optional. */
    siteGroup?: SharePointIdentity;
    /** The SharePoint user associated with this action. Optional. */
    siteUser?: SharePointIdentity;
}
