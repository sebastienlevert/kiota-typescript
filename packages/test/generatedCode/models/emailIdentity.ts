import {Identity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EmailIdentity extends Identity, Partial<Parsable> {
    /** Email address of the user. */
    email?: string;
}
