import {DirectoryObject} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DirectoryRoleTemplate extends DirectoryObject, Partial<Parsable> {
    /** The description to set for the directory role. Read-only. */
    description?: string;
    /** The display name to set for the directory role. Read-only. */
    displayName?: string;
}
