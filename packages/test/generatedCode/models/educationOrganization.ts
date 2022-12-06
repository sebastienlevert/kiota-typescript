import {EducationExternalSource} from './educationExternalSource';
import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationOrganization extends Entity, Partial<Parsable> {
    /** Organization description. */
    description?: string;
    /** Organization display name. */
    displayName?: string;
    /** Source where this organization was created from. Possible values are: sis, manual. */
    externalSource?: EducationExternalSource;
    /** The name of the external source this resources was generated from. */
    externalSourceDetail?: string;
}
