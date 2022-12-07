import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AccessReviewReviewer extends Entity, Partial<Parsable> {
    /** The date when the reviewer was added for the access review. */
    createdDateTime?: Date;
    /** Name of reviewer. */
    displayName?: string;
    /** User principal name of the user. */
    userPrincipalName?: string;
}
