import {Identity, IdentitySet, SharePointIdentity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SharePointIdentitySet extends IdentitySet, Partial<Parsable> {
    /** The group property */
    group?: Identity;
    /** The siteGroup property */
    siteGroup?: SharePointIdentity;
    /** The siteUser property */
    siteUser?: SharePointIdentity;
}
