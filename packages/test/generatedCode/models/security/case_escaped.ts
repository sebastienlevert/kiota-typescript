import {Entity, IdentitySet} from '../';
import {CaseStatus} from './caseStatus';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Case_escaped extends Entity, Partial<Parsable> {
    /** The createdDateTime property */
    createdDateTime?: Date;
    /** The description property */
    description?: string;
    /** The displayName property */
    displayName?: string;
    /** The lastModifiedBy property */
    lastModifiedBy?: IdentitySet;
    /** The lastModifiedDateTime property */
    lastModifiedDateTime?: Date;
    /** The status property */
    status?: CaseStatus;
}
