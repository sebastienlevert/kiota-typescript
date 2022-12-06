import {DirectoryObject} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PolicyBase extends DirectoryObject, Partial<Parsable> {
    /** Description for this policy. Required. */
    description?: string;
    /** Display name for this policy. Required. */
    displayName?: string;
}
