import {Identity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SharePointIdentity extends Identity, Partial<Parsable> {
    /** The sign in name of the SharePoint identity. */
    loginName?: string;
}
