import {Entity} from '../';
import {Identity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ExternalGroup extends Entity, Partial<Parsable> {
    /** The description of the external group. Optional. */
    description?: string;
    /** The friendly name of the external group. Optional. */
    displayName?: string;
    /** A member added to an externalGroup. You can add Azure Active Directory users, Azure Active Directory groups, or an externalGroup as members. */
    members?: Identity[];
}
