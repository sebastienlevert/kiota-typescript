import {SubjectSet} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SingleUser extends Partial<Parsable>, SubjectSet {
    /** The name of the user in Azure AD. Read only. */
    description?: string;
    /** The ID of the user in Azure AD. */
    userId?: string;
}
