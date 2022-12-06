import {Entity, TermsAndConditionsAcceptanceStatus, TermsAndConditionsAssignment} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TermsAndConditions extends Entity, Partial<Parsable> {
    /** Administrator-supplied explanation of the terms and conditions, typically describing what it means to accept the terms and conditions set out in the T&C policy. This is shown to the user on prompts to accept the T&C policy. */
    acceptanceStatement?: string;
    /** The list of acceptance statuses for this T&C policy. */
    acceptanceStatuses?: TermsAndConditionsAcceptanceStatus[];
    /** The list of assignments for this T&C policy. */
    assignments?: TermsAndConditionsAssignment[];
    /** Administrator-supplied body text of the terms and conditions, typically the terms themselves. This is shown to the user on prompts to accept the T&C policy. */
    bodyText?: string;
    /** DateTime the object was created. */
    createdDateTime?: Date;
    /** Administrator-supplied description of the T&C policy. */
    description?: string;
    /** Administrator-supplied name for the T&C policy. */
    displayName?: string;
    /** DateTime the object was last modified. */
    lastModifiedDateTime?: Date;
    /** Administrator-supplied title of the terms and conditions. This is shown to the user on prompts to accept the T&C policy. */
    title?: string;
    /** Integer indicating the current version of the terms. Incremented when an administrator makes a change to the terms and wishes to require users to re-accept the modified T&C policy. */
    version?: number;
}
