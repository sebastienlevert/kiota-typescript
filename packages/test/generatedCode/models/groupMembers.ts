import {SubjectSet} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GroupMembers extends Partial<Parsable>, SubjectSet {
    /** The name of the group in Azure AD. Read only. */
    description?: string;
    /** The ID of the group in Azure AD. */
    groupId?: string;
}
