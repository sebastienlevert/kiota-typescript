import {AllowedAudiences} from './allowedAudiences';
import {Entity, IdentitySet, InferenceData, PersonDataSources} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ItemFacet extends Entity, Partial<Parsable> {
    /** The allowedAudiences property */
    allowedAudiences?: AllowedAudiences;
    /** The createdBy property */
    createdBy?: IdentitySet;
    /** Provides the dateTimeOffset for when the entity was created. */
    createdDateTime?: Date;
    /** The inference property */
    inference?: InferenceData;
    /** The isSearchable property */
    isSearchable?: boolean;
    /** The lastModifiedBy property */
    lastModifiedBy?: IdentitySet;
    /** Provides the dateTimeOffset for when the entity was created. */
    lastModifiedDateTime?: Date;
    /** The source property */
    source?: PersonDataSources;
}
