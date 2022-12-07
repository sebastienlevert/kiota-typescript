import {ItemFacet, ServiceInformation} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WebAccount extends ItemFacet, Partial<Parsable> {
    /** Contains the description the user has provided for the account on the service being referenced. */
    description?: string;
    /** The service property */
    service?: ServiceInformation;
    /** Contains a status message from the cloud service if provided or synchronized. */
    statusMessage?: string;
    /** The thumbnailUrl property */
    thumbnailUrl?: string;
    /** The user name  displayed for the webaccount. */
    userId?: string;
    /** Contains a link to the user's profile on the cloud service if one exists. */
    webUrl?: string;
}
